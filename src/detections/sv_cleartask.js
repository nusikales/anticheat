on('clearPedTasksEvent', (sender, data) => {
    if (data.immediately) {
        emit("rGM:essentials:ban", sender, "Anticheat 0xA12DC | Contactez le staff si vous pensez que le ban est une erreur.")

        //emit("RAC:ban", sender, "0xA12DC")
    }
});