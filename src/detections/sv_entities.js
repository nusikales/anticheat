on('entityCreating', (entity) => {
    const model = GetEntityModel(entity);

    ServerConfig.BlacklistedEntities.forEach((entity) => {
        if (model == GetHashKey(entity)) {
            CancelEvent();
        }
    });
});