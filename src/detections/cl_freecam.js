setTimeout(() => 
{
    const tick = setTick(async () => 
    {
        if (!exports.rGM.isPlayerLoaded()) {
            await Delay(250);
            return;
        }

        clearTick(tick);

        setTick(async () => {
            await Delay(1000);
            if (exports.rGM.getPlayerPerms() == "staff.none")
            {
                if (!IsGameplayCamRendering())
                {
                    emitNet("RAC:ban", "0xB7");
                }
            }

        });
    });
},0);