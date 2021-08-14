on('clearPedTasksEvent', (sender, data) => {
    
    if (data.damageType === 5) {
        emit("RAC:ban", sender, "0xD1A2532")
    }
    else if (data.damageType === 10) {
        if (data.weaponType !== 911657153) {
            emit("RAC:ban", sender, "0xD2532A")
        }
    }

    const wDamage = data.weaponDamage;
    if (wDamage !== 0 && wDamage !== undefined) {
        const basicDamage = ServerConfig.WeaponDamage[data.weaponType];
        if (basicDamage !== undefined && wDamage > basicDamage) { 
            emit("rGM:essentials:ban", sender, "Anticheat senpai change ur cheat | Contactez le staff si vous pensez que le ban est une erreur.")

            //emit("RAC:ban", sender, "senpai change ur cheat")
        }else {
            console.log("AERROR1");
        }
    }

});