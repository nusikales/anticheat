const playersCache = {};

on('startProjectileEvent', (sender, data) => {

    if (playersCache[sender] === undefined) {
        playersCache[sender] = {timer:GetGameTimer(), weaponHash:data.weaponHash}
    }
    else {
        if ((GetGameTimer() - playersCache[sender].timer) < 15) {
            console.log(sender + " is gay...");
            playersCache[sender] = {timer:GetGameTimer(), weaponHash:data.weaponHash}
        } 
    }
	
	// @todo finish
});