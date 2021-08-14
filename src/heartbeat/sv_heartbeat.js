let playersHeartbeatCache = {};

RegisterNetEvent("RAC:receiveHeartbeat")
onNet("RAC:receiveHeartbeat", () => {
    const sender = source;
    
    if (playersHeartbeatCache[sender] !== undefined)
    {
        playersHeartbeatCache[sender].lastHeartbeat = GetGameTimer()
    }
});

RegisterNetEvent("RAC:ban")
onNet("RAC:ban", (code) => {
    const sender = source;

    emit("rGM:essentials:ban", sender, `Anticheat ${code} | ${Config.banMessage}`)
});

RegisterNetEvent("rAC:kick")
onNet("rAC:kick", (reason) => {
    const sender = source;
    emit("rGM:essentials:ban", sender, reason)
});

setTimeout(() => {
    let c = 0;
    setTick(async () => {
        await Delay(30000)
        GetPlayers().forEach(v => {
            if (playersHeartbeatCache[v] === undefined)
            {
                playersHeartbeatCache[v] = {
                    lastHeartbeat: GetGameTimer(),
                    failedChecks: 0
                }
            }

            let plC = playersHeartbeatCache[v];
            if(GetGameTimer() > (plC.lastHeartbeat + 30000) && GetPlayerPing(v) < 500)
            {
                playersHeartbeatCache[v].failedChecks++;
                console.log("[DBG](sv_heartbeat) playerId: " + v + " failed heartbeat: " + plC.lastHeartbeat + " | " + GetGameTimer())
            }
            else
            {
                if (plC.failedChecks > 0 && c < 2) 
                {
                    c++;
                }
                else if (c >= 2 && plC.failedChecks > 0)
                {
                    playersHeartbeatCache[v].failedChecks--;
                }
            }

            if (playersHeartbeatCache[v].failedChecks >= 2)
            {
                emit("rGM:essentials:ban", v, "Resouce stopper.")
                // @todo refaire système ban pour anticheat release public
            }
        });
    });
}, 0);