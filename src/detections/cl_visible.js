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
            await Delay(750);

            if (exports.rGM.getPlayerPerms() === "staff.none") {

                if (!IsEntityVisible(localPlayer)) {
                    emitNet("RAC:ban", "0xAC");
                }

                if (IsPedSittingInAnyVehicle(localPlayer) && IsVehicleVisible(GetVehiclePedIsIn(localPlayer, 1))) {
                    const playerVeh = GetVehiclePedIsIn(localPlayer, false);
                    
                    if (GetPedInVehicleSeat(playerVeh, 1) == localPlayer) {
                        emitNet("RAC:ban", "0xAD");
                    }
                }

                if (!IsEntityVisibleToScript(localPlayer)) {
                    emitNet("RAC:ban", "0xB1");
                }

                if (GetEntityAlpha(localPlayer) <= 150) {
                    emitNet("RAC:ban", "0xB2");
                }
            }
        });
    });
},0);