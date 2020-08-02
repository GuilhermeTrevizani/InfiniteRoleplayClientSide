mp.events.add('abrirCelular', (contatos, msg, tipo) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://celular/celular.html');
	browser.execute('mostrarMensagem("' + msg + '", ' + tipo +');');

    contatos.forEach(function(p) {
	    browser.execute(`$("#contatos").append('<tr class="pesquisacon"><td>${p.Nome}</td> <td>${p.Celular}</td> <td><button class="btn btn-xs btn-danger" type="button" onclick="excluirContato(${p.Celular})">Excluir</button></td></tr>');`);
    });
    
    exibirCursor();
});

mp.events.add('gravarContato', (nome, celular) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
    
    var cel = parseInt(celular);
    mp.events.callRemote('gravarContato', nome, isNaN(cel) ? 0 : cel);
});

mp.events.add('excluirContato', (celular) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('excluirContato', celular);
});