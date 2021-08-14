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

            const type = GetWeaponDamageType(GetSelectedPedWeapon(GetPlayerPed(-1)));
            N_0x4757f00bc6323cfe(GetHashKey("WEAPON_EXPLOSION"), 0.0);

            if (type == 4 || type == 5 || type == 6 || type == 13)
            {
                emitNet("RAC:ban", "0xB3");
            }
        });
    });
},0);