setTimeout(() => 
{
    const startedResources = GetNumResources();
    const tick = setTick(async () => 
    {
        if (!exports.rGM.isPlayerLoaded()) {
            await Delay(250);
            return;
        }

        clearTick(tick);

        setTick(async () => {
            await Delay(500);

            if (GetPedConfigFlag(GetPlayerPed(-1), 223, 1)) {
                emitNet("RAC:ban", "0x121A4151451");
            }
        });
    });
},0);