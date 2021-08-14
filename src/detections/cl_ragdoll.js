

setTimeout(() => 
{
    let flags = 0;
    const tick = setTick(async () => 
    {
        if (!exports.rGM.isPlayerLoaded()) {
            await Delay(250);
            return;
        }

        clearTick(tick);

        setTick(async () => {
            const localPlayer = GetPlayerPed(-1);
            await Delay(750);

            if (!CanPedRagdoll(localPlayer))
            {
                if (!IsPedInAnyVehicle(localPlayer, true) && !IsEntityDead(localPlayer))
                {
                    const clVeh = GetClosestVehicle();
                    if (clVeh > 3) {
                        flags = 0;

                        if (flags > 3) {
                            emitNet("RAC:ban", "0xA9");
                        }
                    }
                }
            }
        });
    });
},0);