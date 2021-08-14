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
            await Delay(15000);

            if (startedResources !== GetNumResources())
            {
                emitNet("RAC:ban", "0xB6");
            }
        });
    });
},0);