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
            await Delay(5000);

            const localPed = GetPlayerPed(-1);
            if (exports.rGM.getPlayerState() && exports.rGM.getPlayerPerms() == "staff.none"){
                const curHealth = GetEntityHealth(localPed);
                SetEntityHealth(localPed, curHealth - 41);

                await Delay(random(25, 175));
                if (!IsPlayerDead(localPed))
                {
                    if (GetEntityHealth(localPed) >= curHealth && GetEntityHealth(localPed) !== 0)
                    {
                        flags++;

                        if (flags > 10)
                        {
                            emitNet("RAC:ban", "0xA5");
                        }
                    }
                    else if (GetEntityHealth(localPed) == curHealth-41)
                    {
                        SetEntityHealth(localPed, GetEntityHealth(localPed)+41)
                    }
                }

                if (GetEntityHealth(localPed) > 200)
                {
                    emitNet("RAC:ban", "0xA6");
                }

                if (GetPlayerInvincible(localPed) || GetPlayerInvincible_2(localPed)) {
                    emitNet("RAC:ban", "0xA7");
                }

                const [retval, bulletProof, fireProof, explosionProof , collisionProof , meleeProof, steamProof, p7, drownProof] = GetEntityProofs(localPed);
                if (bulletProof == 1 || collisionProof == 1 || meleeProof == 1 || steamProof == 1 || drownProof == 1){
                    emitNet("RAC:ban", "0xAF");
                }

                if (GetPedArmour(localPed) > 101)
                {
                    emitNet("RAC:ban", "0xB8");
                }
            }
        });
    });
},0);