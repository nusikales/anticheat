function isExplosionBlacklisted(e) 
{
    return ServerConfig.BlockedExplosions.some((expl) => expl === e);
}

on('explosionEvent', (sender, data) => {

    CancelEvent();
    data.damageScale = 0.0;

    if (isExplosionBlacklisted(data.explosionType)) {
        emit("rGM:essentials:ban", sender, "Anticheat 0x00 | Contactez le staff si vous pensez que le ban est une erreur.")

        //emit("RAC:ban", sender, "0x00")
    }
    
});