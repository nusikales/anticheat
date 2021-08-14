function isPedBlacklisted(p) 
{
    return Config.blacklistedPeds.some((ped) => ped === p);
}

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
            await Delay(150);
            
            EnumeratePeds().forEach((element) => {
                if (!isPedBlacklisted(element)) {
                    return;
                }

                DeleteEntity(element);
            });

        });
    });
},0);