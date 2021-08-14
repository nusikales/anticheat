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
            const localPlayer = PlayerPedId();

            if (!IsPlayerDead(localPlayer))
            {
                const [hw, hash] = GetCurrentPedWeapon(localPlayer, true);
                if (hash !== 0xA2719263)
                {
                    if (hw && !(IsPedInAnyVehicle(localPlayer)))
                    {
                        if (GetPlayerWeaponDamageModifier(localPlayer)) 
                        {
                            emitNet("RAC:ban", "0xA3");
                        }
                    }

                    const normalDmg = Config.ClientWeaponDamage[hash];
                    if (normalDmg !== undefined)
                    {
                        if (GetWeaponDamage(hash) !== normalDmg)
                        {
                            emitNet("RAC:ban", "0xA4");
                        }
                    }
                }
            }
        });
    });
},0);