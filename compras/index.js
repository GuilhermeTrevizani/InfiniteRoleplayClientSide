mp.events.add('comandoComprar', (precos, tipoMsg, msg) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://compras/compras.html');
	browser.execute('mostrarMensagem("' + msg + '", ' + tipoMsg +');');

    precos.forEach(function(p) {
        var strNome = p.Nome.replace(" ", "_");
	    browser.execute(`$("#precos").append('<tr><td>${p.Nome}</td> <td>${p.Preco}</td> <td><button class="btn btn-xs btn-success" type="button" data-nome="${strNome}" onclick="comprarConveniencia(this)">Comprar</button></td></tr>');`);
    });
    
    if (!mp.gui.cursor.visible)
      mp.gui.cursor.show(true, true);
});

mp.events.add('comprarConveniencia', (nome) => {
    mp.events.callRemote('comprarConveniencia', nome);
});