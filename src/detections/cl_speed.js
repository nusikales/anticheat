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
            const localPlayer = GetPlayerPed(-1);
            await Delay(1000);

            if (exports.rGM.getPlayerPerms() === "staff.none"){
                if (!IsPedInAnyVehicle(localPlayer, true)) {
                    if (GetEntitySpeed(localPlayer) > 10) {
                        if (!IsPedFalling(localPlayer) && !IsPedInParachuteFreeFall(localPlayer) && !IsPedJumpingOutOfVehicle(localPlayer) && !IsPedRagdoll(localPlayer)) {
                            emitNet("RAC:ban", "0xB5");
                        }
                    }
                }
            }
        });
    });
},0);