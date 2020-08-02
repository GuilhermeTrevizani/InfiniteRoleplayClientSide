mp.events.add('comandoArmario', (armario, faccao, itens, tipoMsg, msg) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://armario/armario.html');
    browser.execute('mostrarMensagem("' + msg + '", ' + tipoMsg +');');
    browser.execute(`$('#tituloarmario').text('${faccao}');`);

    itens.forEach(function(p) {
	    browser.execute(`$("#itens").append('<tr><td>${p.Arma}</td> <td>${p.Municao}</td> <td>${p.Estoque}</td> <td>${p.Rank}</td> <td><button class="btn btn-xs btn-success" type="button" data-arma="${p.Arma}" onclick="equiparItemArmario(${armario}, this)">Equipar</button></td></tr>');`);
    });
    
    exibirCursor();
});

mp.events.add('equiparItemArmario', (armario, nome) => {
    mp.events.callRemote('equiparItemArmario', armario, nome);
});