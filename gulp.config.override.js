module.exports = config => {
    const configOverride = {
        open: false,
        dest: { ...config.dest, electron: 'build/electron' },
        src: {
            ...config.src,
            electron: 'public/**/*',
            electronBase: 'public/',
        },
    };

    return {
        ...config,
        ...configOverride,
    };
};
