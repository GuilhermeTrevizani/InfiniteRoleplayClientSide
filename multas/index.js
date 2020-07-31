mp.events.add('visualizarMultas', (multas, erro) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://multas/multas.html');
	browser.execute('mostrarErro("' + erro + '");');

    multas.forEach(function(p) {
	    browser.execute(`$("#contatos").append('<tr><td>${p.Codigo}</td> <td>${p.Data}</td> <td>${p.Valor}</td> <td>${p.Motivo}</td> <td><button class="btn btn-xs btn-success" type="button" onclick="pagarMulta(${p.Codigo})">Pagar</button></td></tr>');`);
    });
    
    if (!mp.gui.cursor.visible)
      mp.gui.cursor.show(true, true);
});

mp.events.add('pagarMulta', (multa) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('pagarMulta', multa);
});