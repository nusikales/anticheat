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
            await Delay(1);

            const isInVeh = IsPedInAnyVehicle(localPlayer, false);
            
            if(!isInVeh) {
                await Delay(750);
            }
            else
            {
                if (exports.rGM.getPlayerPerms() === "staff.none") {
                    const playerVeh = GetVehiclePedIsIn(localPlayer, 0);

                    if (GetPlayerVehicleDamageModifier(localPlayer) > 1.0) {
                        emitNet("RAC:ban", "0xBB");
                    }

                    if (GetEntitySpeed(playerVeh) > (GetVehicleEstimatedMaxSpeed(playerVeh) * 1.5)) {
                        emitNet("RAC:ban", "0x3565212A");
                    }

                    if (GetVehicleCheatPowerIncrease(playerVeh) !== 1.0) {
                        emitNet("RAC:ban", "0xBB");
                    }

                    if (GetVehicleTopSpeedModifier(playerVeh) !== 1.0) {
                        emitNet("RAC:ban", "0x22533A");
                    }

                    if (IsVehicleDamaged(playerVeh) !== 1.0) {
                        if (GetEntityHealth(playerVeh) >= GetEntityMaxHealth(playerVeh)) {
                            emitNet("RAC:ban", "0xBC");
                        }
                    }

                    if (GetVehicleCheatPowerIncrease(playerVeh) > 1.0) {
                        emitNet("RAC:ban", "0xBD");
                    }

                    if (!GetVehicleTyresCanBurst(playerVeh)) {
                        emitNet("RAC:ban", "0xBF");
                    }

                }
            }
        });
    });
},0);