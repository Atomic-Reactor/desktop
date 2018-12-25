module.exports = config => {
    const configOverride = { open: false };

    return {
        ...config,
        ...configOverride,
    };
};
