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
            await Delay(750);

            if (exports.rGM.getPlayerPerms() === "staff.none")
            {
                if (GetNumberOfActiveBlips > Config.blipsCount)
                {
                    emitNet("RAC:ban", "0xA8");
                }
            }
        });
    });
},0);
