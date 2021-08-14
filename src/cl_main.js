on('onClientResourceStart', (resourceName) => {
    let res = false;

    Config.realResources.forEach(element => {
        if (element === resourceName){
            res = true;
        } 
    });

    if(!res)
    {
        console.log("[DBG](cl_main) Unknown resource " + resourceName)
    }
});
