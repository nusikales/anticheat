function RemoveDrops()
{
    const localPlayer = PlayerId()

    Config.PickupList.forEach(element => {
        N_0x616093ec6b139dd9(localPlayer, GetHashKey(element), false)
    });
}

setTimeout(() => 
{
    RemoveDrops();
},0);