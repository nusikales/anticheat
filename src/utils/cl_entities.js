const iterator = (first, move, dispose) =>
{
    const ret = [];
    const [handle, firstEntity] = first();
    if (!handle) {
        return ret;
    }

    ret.push(firstEntity);

    let next = true;
    while (next)
    {
        const [valid, entity] = move(handle);
        if (valid) {
            ret.push(entity);
        }
        next = valid;
    }

    dispose(handle);
    return ret;
}

const EnumerateObjects = () => iterator(FindFirstObject, FindNextObject, EndFindObject);
const EnumeratePeds = () => iterator(FindFirstPed, FindNextPed, EndFindPed);
const EnumerateVehicles = () => iterator(FindFirstVehicle, FindNextVehicle, EndFindVehicle);
const EnumeratePickups = () => iterator(FindFirstPickup, FindNextPickup, EndFindPickup);

const GetClosestVehicle = () =>
{
    let closestEntityDistance = -1;
    const localPlayer = GetPlayerPed(-1);
    const coords = GetEntityCoords(localPlayer);

    EnumerateVehicles().forEach((entity) => {
        const entityCoords = GetEntityCoords(entity);        
        const distance = GetDistanceBetweenCoords(coords[0], coords[1], coords[2], entityCoords[0], entityCoords[1], entityCoords[2], true);

        if (closestEntityDistance === -1 || distance < closestEntityDistance){
            closestEntityDistance = distance
        }
    });

    return closestEntityDistance;
}