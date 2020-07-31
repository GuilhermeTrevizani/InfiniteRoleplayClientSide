var browser = null;
var camera = null;

var res_X = 1920;
var res_Y = 1080;

var globalLogado = false;
var globalDinheiro = "0";

require('./login');
require('./players');
require('./ajuda');
require('./concessionaria');
require('./celular');
require('./multas');
require('./compras');

mp.gui.chat.show(false);

const chatbox = mp.browsers.new('package://chat/index.html');
chatbox.markAsChat();

mp.keys.bind(0x72, false, () => {
    if (!mp.gui.cursor.visible)
        mp.gui.cursor.show(true, true);
    else
        mp.gui.cursor.show(false, false);
});

mp.events.add('render', () => {
    if (mp.players.local === null || mp.players.local === undefined || !globalLogado)
        return;

    mp.game.player.restoreStamina(100);
    mp.game.controls.disableControlAction(2, 243, true); // Cheats

    if (mp.players.local.hasVariable("IsAnimacao"))
    {
        if (mp.players.local.getVariable("IsAnimacao"))
        {
            mp.game.controls.disableControlAction(0, 22, true);
            mp.game.player.disableFiring(true);
            mp.game.controls.disableControlAction(0, 25, true);
        }
    }

    let resolution = mp.game.graphics.getScreenResolution(0,0);
	if (resolution.x < 1920)
	{
		res_X = resolution.x;
		res_Y = resolution.y;
	}

    mp.game.graphics.drawText("$" + globalDinheiro, [(res_X - 50) / res_X, 0.060], {
        font:4, 
        color:[115, 186, 131, 200],
        scale: [0.8, 0.8],
        outline: true,
        centre: true
    });
});

mp.events.add('setDinheiro', (dinheiro) => {
    globalDinheiro = dinheiro;
});

mp.events.add('fecharBrowser', () => {
    if (browser != null) {
        browser.destroy(); 
        browser = null;
    }

    mp.gui.cursor.show(false, false);
});

mp.events.add('ativarChat', () => {
    mp.gui.chat.activate(true);
    mp.gui.cursor.show(false, false);
});

mp.events.add('setIPL', (ipl) => {
    mp.game.streaming.requestIpl(ipl);
    mp.players.local.clearTasksImmediately();
});

mp.events.add('removeIPL', (ipl) => {
    mp.game.streaming.removeIpl(ipl);
    mp.players.local.clearTasksImmediately();
});

mp.events.add('setWaypoint', (x, y) => {
    mp.game.ui.setNewWaypoint(x, y);
});

// testes
mp.events.add("attachEntityToEntity", (entity1, entity2, boneIndex, posOffset, rotOffset) => {
	entity1.attachTo(entity2.handle, entity2.getBoneIndex(boneIndex), posOffset.x, posOffset.y, posOffset.z, rotOffset.x, rotOffset.y, rotOffset.z, true, true, false, true, 0, true);
});

mp.events.add('teta', () => {
    //mp.game.ped.createPed(6, 368603149, mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, mp.players.local.getHeading(), true, true);
    const localPlayer = mp.players.local;
    localPlayer.getWeaponTypeInSlot = (weaponSlot) => mp.game.invoke('0xBBDDEBFD9564D52C', localPlayer.handle, weaponSlot);
    localPlayer.getAmmoWeapon = (weaponhash) => mp.game.invoke('0x2406A9C8DA99D3F4', localPlayer.handle, weaponhash);
    localPlayer.removeWeapon = (weaponhash) => mp.game.invoke('0xA48F593CC7A71FCC', localPlayer.handle, weaponhash);
    localPlayer.setWeaponAmmo = (weaponhash, ammo) => mp.game.invoke('0xC8207C41C6D1E3CF', localPlayer.handle, weaponhash, ammo);
    //localPlayer.currentWeapon = mp.game.invoke('0x6678C142FAC881BA', localPlayer.handle);
    //localPlayer.giveWeaponComponent = (weaponhash, component) => mp.game.invoke('0xAD084726D7F23594', localPlayer.handle, weaponhash, component);
    //localPlayer.getWeaponClipSize = (weaponhash) => mp.game.invoke('0xADBCA3534D2F6BEB', weaponhash);
    localPlayer.getAllWeapons = () => {
        const weapons = [];
        weaponSlots.forEach(weaponSlot => {
            const weapon = localPlayer.getWeaponTypeInSlot(weaponSlot);
            if (weapon !== 0 && weapon !== -1569615261) {
                weapons[weapon] = { ammo: localPlayer.getAmmoWeapon(weapon) };
            }
        });
		mp.events.callRemote('teta2', weapons);
    };
    localPlayer.getAllWeapons();
});

/*
mp.keys.bind(0x77, false, (player) => {
    var time = mp.game.time.getLocalTime(1,1,1,1,1,1);
    var screenName = "gta-world-" + time.year + "-" + time.month + "-" + time.day + "-" + time.hour + "-" + time.minute + "-" + time.second + ".png";
    mp.gui.takeScreenshot(screenName, 1, 100, 0);
    mp.game.graphics.notify("~b~Screenshot taken: \n" +
                            "~s~" + screenName + "\n" +
                            "~g~C:\\RAGEMP\\screenshots");
});*/
/*
const doors = [

    // Banks
    {id: 0,  name: 'Pacific Standard Bank Main Doors',                     hash: 110411286,    locked: true, position: new mp.Vector3(232.6054, 214.1584, 106.4049)},   // Right
    {id: 1,  name: 'Pacific Standard Bank Main Doors',                     hash: 110411286,    locked: true, position: new mp.Vector3(231.5123, 216.5177, 106.4049)},   // Left
    {id: 6,  name: 'Pacific Standard Bank Back To Hall Doors',             hash: 110411286,    locked: true, position: new mp.Vector3(259.9831, 215.2468, 106.4049)},   // Right
    {id: 7,  name: 'Pacific Standard Bank Back To Hall Doors',             hash: 110411286,    locked: true, position: new mp.Vector3(259.0879, 212.8062, 106.4049)},   // Left

    {id: 2,  name: 'Pacific Standard Bank Main Doors',                     hash: 110411286,    locked: true, position: new mp.Vector3(260.6432, 203.2052, 106.4049)},   // Right
    {id: 3,  name: 'Pacific Standard Bank Main Doors',                     hash: 110411286,    locked: true, position: new mp.Vector3(258.2022, 204.1005, 106.4049)},   // Left

    {id: 4,  name: 'Pacific Standard Bank Door To Upstair',                hash: 1956494919,   locked: true, position: new mp.Vector3(237.7704, 227.87, 106.426)}, 
    {id: 5,  name: 'Pacific Standard Bank Upstair Door',                   hash: 1956494919,   locked: true, position: new mp.Vector3(236.5488, 228.3147, 110.4328)},
    {id: 8,  name: 'Pacific Standard Bank Upstair Door To Offices',        hash: 1956494919,   locked: true, position: new mp.Vector3(256.6172, 206.1522, 110.4328)}, 
    {id: 9,  name: 'Pacific Standard Bank Big Office Door',                hash: 964838196,    locked: true, position: new mp.Vector3(260.8579, 210.4453, 110.4328)}, 
    {id: 10, name: 'Pacific Standard Bank Small Office Door',              hash: 964838196,    locked: true, position: new mp.Vector3(262.5366, 215.0576, 110.4328)}, 
   
    // Shops      
    {id: 160, name: 'Robs Liquor Route 1 Main Enter Door',                 hash: -1212951353,  locked: true, position: new mp.Vector3(-2973.535, 390.1414, 15.18735)},  
    {id: 161, name: 'Robs Liquor Route 1 Personnal Door',                  hash: 1173348778,   locked: true, position: new mp.Vector3(-2965.648, 386.7928, 15.18735)},  
    {id: 162, name: 'Robs Liquor Route 1 Back Door',                       hash: 1173348778,   locked: true, position: new mp.Vector3(-2961.749, 390.2573, 15.19322)},  
    {id: 163, name: 'Robs Liquor Prosperity Street Main Enter Door',       hash: -1212951353,  locked: true, position: new mp.Vector3(-1490.411, -383.8453, 40.30745)},  
    {id: 164, name: 'Robs Liquor Prosperity Street Personnal Door',        hash: 1173348778,   locked: true, position: new mp.Vector3(-1482.679, -380.153, 40.30745)},  
    {id: 165, name: 'Robs Liquor Prosperity Street Back Door',             hash: 1173348778,   locked: true, position: new mp.Vector3(-1482.693, -374.9365, 40.31332)},  
    {id: 166, name: 'Robs Liquor San Andreas Avenue Main Enter Door',      hash: -1212951353,  locked: true, position: new mp.Vector3(-1226.894, -903.1218, 12.47039)},  
    {id: 167, name: 'Robs Liquor San Andreas Avenue Personnal Door',       hash: 1173348778,   locked: true, position: new mp.Vector3(-1224.755, -911.4182, 12.47039)},  
    {id: 168, name: 'Robs Liquor San Andreas Avenue Back Door',            hash: 1173348778,   locked: true, position: new mp.Vector3(-1219.633, -912.406, 12.47626)},  
    {id: 169, name: 'Robs Liquor El Rancho Boulevard Main Enter Door',     hash: -1212951353,  locked: true, position: new mp.Vector3(1141.038, -980.3225, 46.55986)},  
    {id: 170, name: 'Robs Liquor El Rancho Boulevard Personnal Door',      hash: 1173348778,   locked: true, position: new mp.Vector3(1132.645, -978.6059, 46.55986)},  
    {id: 171, name: 'Robs Liquor El Rancho Boulevard Back Door',           hash: 1173348778,   locked: true, position: new mp.Vector3(1129.51, -982.7756, 46.56573)},  
     
  
    {id: 190, name: 'Premium Deluxe Motorsport Parking Doors',             hash: 1417577297,   locked: true, position: new mp.Vector3(-37.33113, -1108.873, 26.7198)},   // Right
    {id: 191, name: 'Premium Deluxe Motorsport Parking Doors',             hash: 2059227086,   locked: true, position: new mp.Vector3(-39.13366, -1108.218, 26.7198)},   // Left
    {id: 192, name: 'Premium Deluxe Motorsport Main Doors',                hash: 1417577297,   locked: true, position: new mp.Vector3(-60.54582, -1094.749, 26.88872)},  // Right
    {id: 193, name: 'Premium Deluxe Motorsport Main Doors',                hash: 2059227086,   locked: true, position: new mp.Vector3(-59.89302, -1092.952, 26.88362)},  // Left
    {id: 194, name: 'Premium Deluxe Motorsport Right Office Door',         hash: -2051651622,  locked: true, position: new mp.Vector3(-33.80989, -1107.579, 26.57225)},    
    {id: 195, name: 'Premium Deluxe Motorsport Left Office Door',          hash: -2051651622,  locked: true, position: new mp.Vector3(-31.72353, -1101.847, 26.57225)},    
   
    
    // Police   
    {id: 1000, name: 'Mission Row Police Station Main Enter Doors',        hash: 320433149,    locked: true, position: new mp.Vector3(434.7479, -983.2151, 30.83926)},  // Right
    {id: 1001, name: 'Mission Row Police Station Main Enter Doors',        hash: -1215222675,  locked: true, position: new mp.Vector3(434.7479, -980.6184, 30.83926)},  // Left
    {id: 1002, name: 'Mission Row Police Station Back Enter Doors',        hash: -2023754432,  locked: true, position: new mp.Vector3(469.9679, -1014.452, 26.53623)},  // Right
    {id: 1003, name: 'Mission Row Police Station Back Enter Doors',        hash: -2023754432,  locked: true, position: new mp.Vector3(467.3716, -1014.452, 26.53623)},  // Left

    {id: 1004, name: 'Mission Row Police Station Back To Cells Door',      hash: -1033001619,  locked: true, position: new mp.Vector3(463.4782, -1003.538, 25.00599)}, 
    {id: 1008, name: 'Mission Row Police Station Door To Cells Door',      hash: 631614199,    locked: true, position: new mp.Vector3(464.5701, -992.6641, 25.06443)}, 
    {id: 1009, name: 'Mission Row Police Station Captans Office Door',     hash: -1320876379,  locked: true, position: new mp.Vector3(446.5728, -980.0106, 30.8393)}, 
    {id: 1010, name: 'Mission Row Police Station Armory Double Door',      hash: 185711165,    locked: true, position: new mp.Vector3(450.1041, -984.0915, 30.8393)},  // Right
    {id: 1011, name: 'Mission Row Police Station Armory Double Door',      hash: 185711165,    locked: true, position: new mp.Vector3(450.1041, -981.4915, 30.8393)},  // Left

    {id: 1012, name: 'Mission Row Police Station Armory Secure Door',      hash: 749848321,    locked: true, position: new mp.Vector3(453.0793, -983.1895, 30.83926)}, 
    {id: 1013, name: 'Mission Row Police Station Locker Rooms Door',       hash: 1557126584,   locked: true, position: new mp.Vector3(450.1041, -985.7384, 30.8393)}, 
    {id: 1014, name: 'Mission Row Police Station Locker Room 1 Door',      hash: -2023754432,  locked: true, position: new mp.Vector3(452.6248, -987.3626, 30.8393)}, 
    {id: 1015, name: 'Mission Row Police Station Roof Access Door',        hash: 749848321,    locked: true, position: new mp.Vector3(461.2865, -985.3206, 30.83926)}, 
    {id: 1016, name: 'Mission Row Police Station Roof Door',               hash: -340230128,   locked: true, position: new mp.Vector3(464.3613, -984.678, 43.83443)}, 
    {id: 1017, name: 'Mission Row Police Station Cell And Briefing Doors', hash: 185711165,    locked: true, position: new mp.Vector3(443.4078, -989.4454, 30.8393)},  // Right
    {id: 1018, name: 'Mission Row Police Station Cell And Briefing Doors', hash: 185711165,    locked: true, position: new mp.Vector3(446.0079, -989.4454, 30.8393)},  // Left
    {id: 1019, name: 'Mission Row Police Station Briefing Doors',          hash: -131296141,   locked: true, position: new mp.Vector3(443.0298, -991.941, 30.8393)},   // Right
    {id: 1020, name: 'Mission Row Police Station Briefing Doors',          hash: -131296141,   locked: true, position: new mp.Vector3(443.0298, -994.5412, 30.8393)},  // Left
    {id: 1021, name: 'Mission Row Police Station Back Gate Door',          hash: -1603817716,  locked: true, position: new mp.Vector3(489.301, -1020.029, 28.078)},  
    
    // Others
    {id: 500, name: 'Vanilla Unicorn Main Enter Door',                     hash: -1116041313,  locked: true, position: new mp.Vector3(127.9552, -1298.503, 29.41962)},  
    {id: 501, name: 'Vanilla Unicorn Back Enter Door',                     hash: 668467214,    locked: true, position: new mp.Vector3(96.09197, -1284.854, 29.43878)},  
    {id: 502, name: 'Vanilla Unicorn Office Door',                         hash: -626684119,   locked: true, position: new mp.Vector3(99.08321, -1293.701, 29.41868)},  
    {id: 503, name: 'Vanilla Unicorn Dress Door',                          hash: -495720969,   locked: true, position: new mp.Vector3(113.9822, -1297.43, 29.41868)},  
    {id: 504, name: 'Vanilla Unicorn Private Rooms Door',                  hash: -1881825907,  locked: true, position: new mp.Vector3(116.0046, -1294.692, 29.41947)},  

    // Added by me
    {id: -1, name: 'Pacific Standard Bank Main Safe',                      hash: 961976194,    locked: true, position: new mp.Vector3(254.230, 224.55, 101.87)},
]
*/