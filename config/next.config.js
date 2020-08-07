/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
    webpack(config, options) {
        if (!options.isServer && config.mode !== 'production') {
            config.plugins.push();
        }

        return config;
    },
};
