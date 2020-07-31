let playersBrowser = null;

mp.keys.bind(0x71, false, () => {
    if (playersBrowser != null) {
		playersBrowser.destroy(); 
        playersBrowser = null;
    
        mp.gui.cursor.show(false, false);
        return;
    }
    
    mp.events.callRemote('playersOnline');
});

mp.events.add('playersOnline', (personagens) => {
    if (playersBrowser != null) {
		    playersBrowser.destroy(); 
        playersBrowser = null;
    }
    
    if (!mp.gui.cursor.visible)
		mp.gui.cursor.show(true, true);

    playersBrowser = mp.browsers.new('package://players/players.html');
    playersBrowser.execute(`$( '#onlinecount').text( '${personagens.length}');`);
    personagens.forEach(function(p) {
	    playersBrowser.execute(`$("#onlineplayers").append('<tr> <th scope="row">${p.id}</th> <td>${p.nome}</td> <td>${p.ping}</td> </tr>');`);
    });
});