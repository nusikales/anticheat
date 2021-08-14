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
            await Delay(750);

            const localPlayer = GetPlayerPed(-1);
            const [hw, hash] = GetCurrentPedWeapon(localPlayer, true);

            if (hw)
            {
                let ammoInPedW = GetAmmoInPedWeapon(localPlayer, hash);
                const [clip, ammo] = GetAmmoInClip(localPlayer, hash);
                const [clip3, maxAmmo] = GetMaxAmmo(localPlayer, hash);


                if (ammoInPedW > 255){
                    flags++;
                }

                if (ammoInPedW >= maxAmmo){
                    SetPedAmmo(localPlayer, hash, (maxAmmo - 10));
                    await Delay(500);

                    ammoInPedW = GetAmmoInPedWeapon(localPlayer, hash);
                    if (ammoInPedW >= maxAmmo){
                        flags++;
                    }
                    else
                    {
                        SetPedAmmo(localPlayer, hash, maxAmmo)
                    }
                }

                if (flags > 15)
                {
                    emitNet("RAC:ban", "0xA1");
                }

                if (ammo > 499 || maxAmmo > 399)
                {
                    emitNet("RAC:ban", "0xB9");
                }

                if (ammoInPedW > maxAmmo)
                {
                    emitNet("RAC:ban", "0xBA");
                }
            }
        });

    });
},0);

setTimeout(() => 
{
    let didShoot = false;
    let flags = 0;
    let lastAmmo = 0;
    const tick = setTick(async () => 
    {
        if (!exports.rGM.isPlayerLoaded()) {
            await Delay(250);
            return;
        }

        clearTick(tick);

        setTick(async () => {
            await Delay(1);
            const localPlayer = PlayerPedId();
            didShoot = IsPedShooting(localPlayer);
        });

        setTick(async () => {
            await Delay(1);
            const localPlayer = PlayerPedId();
            const [hw, hash] = GetCurrentPedWeapon(localPlayer, true);

            if(hw) {
                const [_, ammoInClip] = GetAmmoInClip(localPlayer, hash);

                if (didShoot)
                {
                    await Delay(15);
                    if (ammoInClip == lastAmmo){
                        flags++;

                        if (flags > 10)
                        {
                            emitNet("RAC:ban", "0xA2");
                        }
                    }
                    else
                    {
                        lastAmmo = ammoInClip;
                    }
                }
            }

        });
    });
},0);