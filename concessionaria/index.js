mp.events.add('comandoVComprar', (tipo, veiculos, erro) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://concessionaria/concessionaria.html');
	browser.execute('mostrarErro("' + erro + '");');
	browser.execute('document.getElementById("tipo").value = "' + tipo +'";');

    veiculos.forEach(function(p) {
	    browser.execute(`$("#veiculos").append('<tr class="pesquisaveh"><td>${p.Nome}</td> <td>${p.Preco}</td></tr>');`);
    });
    
    if (!mp.gui.cursor.visible)
      mp.gui.cursor.show(true, true);
});

mp.events.add('comprarVeiculo', (tipo, veiculo, r1, g1, b1, r2, g2, b2) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
    
    mp.events.callRemote('comprarVeiculo', tipo, veiculo, r1, g1, b1, r2, g2, b2);
});