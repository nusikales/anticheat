setTimeout(() => 
{
    let flags, lastPitch = 0;
    const tick = setTick(async () => 
    {
        if (!exports.rGM.isPlayerLoaded()) {
            await Delay(250);
            return;
        }

        clearTick(tick);

        setTick(async () => {
            await Delay(15);
            const localPlayer = GetPlayerPed(-1);
            const pitch = GetGameplayCamRelativePitch();

            if (IsPedShooting(localPlayer)) {
                if(GetGameplayCamRelativePitch() === lastPitch)
                {
                    flags++;

                    if (flags > 10) {
                        emitNet("RAC:ban", "0xAA");
                    }
                }
                else
                {
                    lastPitch = pitch;
                }
            }
        });
    });
},0);