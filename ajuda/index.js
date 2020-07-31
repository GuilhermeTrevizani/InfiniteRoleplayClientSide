mp.events.add('comandoAjuda', (comandos) => {
    if (browser != null) {
		    browser.destroy(); 
        browser = null;
    }
      
    mp.gui.chat.activate(false);

    browser = mp.browsers.new('package://ajuda/ajuda.html');

    comandos.forEach(function(p) {
	    browser.execute(`$("#comandos").append('<tr class="pesquisacmd"><td>${p.Categoria}</td> <td>${p.Nome}</td> <td>${p.Descricao}</td> </tr>');`);
    });
    
    if (!mp.gui.cursor.visible)
      mp.gui.cursor.show(true, true);
});