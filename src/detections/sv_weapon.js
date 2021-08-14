on('giveWeaponEvent', (sender, data) => {
    if (!data.givenAsPickup) {
        console.log(data);
        CancelEvent();
        //emit("rGM:essentials:ban", sender, "Anticheat 0xA12DC | Contactez le staff si vous pensez que le ban est une erreur.")
        //emit("RAC:ban", sender, "0xA12DC")
    }
});

on('removeWeaponEvent', (sender, data) => {
    console.log(data);
    CancelEvent();
    //emit("rGM:essentials:ban", sender, "Anticheat 0xA12DC | Contactez le staff si vous pensez que le ban est une erreur.")
    //emit("RAC:ban", sender, "0xA12DC")
});

on('removeAllWeaponsEvent', (sender, data) => {
    console.log(data);
    CancelEvent();
    //emit("rGM:essentials:ban", sender, "Anticheat 0xA12DC | Contactez le staff si vous pensez que le ban est une erreur.")
    //emit("RAC:ban", sender, "0xA12DC")
});