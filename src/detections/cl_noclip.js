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
                const localPlayer = PlayerPedId();
                if (GetEntityHeightAboveGround(localPlayer) > 20)
                {
                    if (!IsPedInAnyVehicle(localPlayer) && !(IsPedInParachuteFreeFall(localPlayer)) && !(IsPedFalling(localPlayer)))
                    {
                        emitNet("RAC:ban", "0xB4");
                    }
                    else
                    {
                        for (var height = 1; height < 1000; height++)
                        {
                            const localCoords = GetEntityCoords(localPlayer);
                            SetPedCoordsKeepVehicle(localPlayer, localCoords.x, localCoords.y, height);
                            const [foundGround, zPos] = GetGroundZFor_3dCoord(localCoords.x, localCoords.y, height);
                        
                            if (foundGround)
                            {
                                SetPedCoordsKeepVehicle(localPlayer, localCoords.x, localCoords.y, height)
                                break;
                            }

                            await Delay(5);
                        }
                    }
                } 
            }
        });
    });
},0);