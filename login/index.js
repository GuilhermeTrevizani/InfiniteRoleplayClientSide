mp.events.add('mensagem', (mensagem) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}

	if (!mp.gui.cursor.visible)
		mp.gui.cursor.show(true, true);

	mp.game.ui.displayRadar(false);
	mp.players.local.freezePosition(true);
	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);

	browser = mp.browsers.new('package://login/mensagem.html');
	browser.execute('document.getElementById("mensagem").innerHTML = "' + mensagem +'";');
});

mp.events.add('playerConnected', (usuario, erro) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
	globalLogado = false;

	browser = mp.browsers.new('package://login/login.html');

	if (!mp.gui.cursor.visible)
		mp.gui.cursor.show(true, true);

	mp.discord.update("TR3V1Z4", "guilhermetrevizani.com.br");
	mp.game.ui.displayRadar(false);
	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);

	mp.players.local.position = new mp.Vector3(342.3341, -990.8612, -98.19622);
	mp.players.local.freezePosition(true);

	camera = mp.cameras.new('default', new mp.Vector3(344.3341, -998.8612, -98.19622), new mp.Vector3(0, 0, 0), 40);
	camera.pointAtCoord(-986.61447, 0, -186.61447);
	camera.setActive(true);
	mp.game.cam.renderScriptCams(true, false, 0, true, false);

	mp.game.object.doorControl(631614199, 461.8065, -994.4086, 25.06443, true, 0.0, 0.0, 0.0); // Mission Row Police Station Cell Door 1
    mp.game.object.doorControl(631614199, 461.8065, -997.6583, 25.06443, true, 0.0, 0.0, 0.0); // Mission Row Police Station Cell Door 2
	mp.game.object.doorControl(631614199, 461.8065, -1001.302, 25.06443, true, 0.0, 0.0, 0.0); // Mission Row Police Station Cell Door 3

	mp.game.object.doorControl(520341586, -14.86892, -1441.182, 31.19323, true, 0.0, 0.0, 0.0); // Franklin House Enter Door
	mp.game.object.doorControl(703855057, -25.2784, -1431.061, 30.83955, true, 0.0, 0.0, 0.0); // Franklin House Garage Door

	mp.game.object.doorControl(-8873588, 842.7685, -1024.539, 28.34478, true, 0.0, 0.0, 0.0); // Ammu Nation Vespucci Boulevard Doors Right
	mp.game.object.doorControl(97297972, 845.3694, -1024.539, 28.34478, true, 0.0, 0.0, 0.0); // Ammu Nation Vespucci Boulevard Doors Left
	mp.game.object.doorControl(-8873588, -662.6415, -944.3256, 21.97915, true, 0.0, 0.0, 0.0); // Ammu Nation Lindsay Circus Doors Doors Right
	mp.game.object.doorControl(97297972, -665.2424, -944.3256, 21.97915, true, 0.0, 0.0, 0.0); // Ammu Nation Lindsay Circus Doors Doors Left
	mp.game.object.doorControl(-8873588, 810.5769, -2148.27, 29.76892, true, 0.0, 0.0, 0.0); // Ammu Nation Cypress Flats Doors Right
	mp.game.object.doorControl(97297972, 813.1779, -2148.27, 29.76892, true, 0.0, 0.0, 0.0); // Ammu Nation Cypress Flats Doors Left
	mp.game.object.doorControl(-8873588, 18.572, -1115.495, 29.94694, true, 0.0, 0.0, 0.0); // Ammu Nation Popular Street Doors Right
	mp.game.object.doorControl(97297972, 16.12787, -1114.606, 29.94694, true, 0.0, 0.0, 0.0); // Ammu Nation Popular Street Doors Left
	mp.game.object.doorControl(452874391, 6.81789, -1098.209, 29.94685, true, 0.0, 0.0, 0.0); // Ammu Nation Adams Apple Boulevard
	mp.game.object.doorControl(-8873588, 243.8379, -46.52324, 70.09098, true, 0.0, 0.0, 0.0); // Ammu Nation Vinewood Plaza Doors Right
	mp.game.object.doorControl(97297972, 244.7275, -44.07911, 70.09098, true, 0.0, 0.0, 0.0); // Ammu Nation Vinewood Plaza Doors Left

	mp.game.object.doorControl(741314661, 1844.72, 2608.49, 46.0, true, 0.0, 0.0, 0.0); // Bolingbroke Penitentiary Main Enter First Door
	mp.game.object.doorControl(741314661, 1818.252, 2608.384, 46.0, true, 0.0, 0.0, 0.0); // Bolingbroke Penitentiary Main Enter Second Door
	mp.game.object.doorControl(741314661, 1795.98, 2616.696, 45.565, true, 0.0, 0.0, 0.0); // Bolingbroke Penitentiary Main Enter Third Door

	mp.game.object.doorControl(270330101, 723.116, -1088.831, 23.23201, false, 0.0, 0.0, 0.0); // Los Santos Customs Popular Street Door
	mp.game.object.doorControl(-550347177, -356.0905, -134.7714, 40.01295, false, 0.0, 0.0, 0.0); // Los Santos Customs Carcer Way Door       
	mp.game.object.doorControl(-550347177, -1145.898, -1991.144, 14.18357, false, 0.0, 0.0, 0.0); // Los Santos Customs Greenwich Parkway Door
	mp.game.object.doorControl(-822900180, 1174.656, 2644.159, 40.50673, false, 0.0, 0.0, 0.0); // Los Santos Customs Route 68 Doors        
	mp.game.object.doorControl(-822900180, 1182.307, 2644.166, 40.50784, false, 0.0, 0.0, 0.0); // Los Santos Customs Route 68 Doors       
	mp.game.object.doorControl(1335311341, 1187.202, 2644.95, 38.55176, false, 0.0, 0.0, 0.0); // Los Santos Customs Route 68 Office Door  
	mp.game.object.doorControl(1544229216, 1182.646, 2641.182, 39.31031, false, 0.0, 0.0, 0.0); // Los Santos Customs Route 68 Office Door  

	mp.game.object.doorControl(-822900180, 114.3135, 6623.233, 32.67305, false, 0.0, 0.0, 0.0); // Beekers Garage Paleto Bay Doors       
	mp.game.object.doorControl(-822900180, 108.8502, 6617.877, 32.67305, false, 0.0, 0.0, 0.0); // Beekers Garage Paleto Bay Doors       
	mp.game.object.doorControl(1335311341, 105.1518, 6614.655, 32.58521, false, 0.0, 0.0, 0.0); // Beekers Garage Paleto Bay Office Door
	mp.game.object.doorControl(1544229216, 105.7772, 6620.532, 33.34266, false, 0.0, 0.0, 0.0); // Beekers Garage Paleto Bay Interior Door	

	mp.game.object.doorControl(110411286, 232.6054, 214.1584, 106.4049, true, 0.0, 0.0, 0.0); // Pacific Standard Bank Main Doors      
	mp.game.object.doorControl(110411286, 231.5123, 216.5177, 106.4049, true, 0.0, 0.0, 0.0); // Pacific Standard Bank Main Doors     
	mp.game.object.doorControl(110411286, 259.9831, 215.2468, 106.4049, true, 0.0, 0.0, 0.0); // Pacific Standard Bank Back To Hall Doors
	mp.game.object.doorControl(110411286, 259.0879, 212.8062, 106.4049, true, 0.0, 0.0, 0.0); // Pacific Standard Bank Back To Hall Doors
	
	mp.game.vehicle.defaultEngineBehaviour = false;
	mp.players.local.setConfigFlag(429, true);
	
	browser.execute('mostrarUsuario("' + usuario +'"); mostrarErro("' + erro + '");');
});

mp.events.add('logarPersonagem', () => {
	mp.gui.cursor.show(false, false);
	mp.game.ui.displayRadar(true);
	mp.players.local.freezePosition(false);
	mp.gui.chat.activate(true);
	mp.gui.chat.show(true);
	mp.game.player.setHealthRechargeMultiplier(0.0);
	mp.game.gameplay.enableMpDlcMaps(true);
    mp.game.player.disableVehicleRewards();
	mp.game.cam.renderScriptCams(false, false, 0, true, false);	
	mp.game.ui.displayHud(true);
    camera.setActive(false);
    camera.destroy();
	camera = null;  
	globalLogado = true;
});   

mp.events.add('submitEntrarUsuario', (username, password) => {
    if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('entrarUsuario', username, password);
}); 

mp.events.add('registrarUsuario', (user, email, erro) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}

	browser = mp.browsers.new('package://login/registro.html');
	browser.execute('document.getElementById("user").value = "' + user +'"; mostrarErro("' + erro + '");');
	browser.execute('document.getElementById("email").value = "' + email +'";');
});

mp.events.add('submitRegistrarUsuario', (username, email, password, password2) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('registrarUsuario', username, email, password, password2);
});

mp.events.add('selecionarPersonagem', (personagens) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}

	browser = mp.browsers.new('package://login/personagens.html');
	if (personagens.length == 0) {
		browser.execute(`$(".onlineplayers").append('<tr><td scope="row" colspan="2">Você não possui personagens!</td></tr>');`);
	} else {
		personagens.forEach(function(p) {
			browser.execute(`$(".onlineplayers").append('<tr onclick="selecionarPersonagem(${p.id});"> <th scope="row">${p.id}</th> <td>${p.nome}</td></tr>');`);
		});
	}
});

mp.events.add('selPersonagem', (id) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('selecionarPersonagem', id);
});

mp.events.add('criarPersonagem', (nome, sobrenome, sexo, dataNascimento, erro) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}

	browser = mp.browsers.new('package://login/criarpersonagem.html');
	browser.execute('document.getElementById("nome").value = "' + nome +'"; mostrarErro("' + erro + '");');
	browser.execute('document.getElementById("sobrenome").value = "' + sobrenome +'";');
	browser.execute('document.getElementById("sexo").value = "' + sexo +'";');
	browser.execute('document.getElementById("dataNascimento").value = "' + dataNascimento +'";');
});

mp.events.add('voltarPersonagem', () => {
    mp.events.callRemote('voltarSelecionarPersonagem', false);
});

mp.events.add('submitCriarPersonagem', (nome, sobrenome, sexo, dataNascimento) => {
	if (browser != null) {
		browser.destroy(); 
        browser = null;
	}
	
    mp.events.callRemote('criarPersonagem', nome, sobrenome, sexo, dataNascimento);
});