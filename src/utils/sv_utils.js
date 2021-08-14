function GetPlayers()
{
    const num = GetNumPlayerIndices();
    let t = [];

    for(i = 0; i < num; i++)
    {
        t.push(GetPlayerFromIndex(i));
    }

    return t;
}