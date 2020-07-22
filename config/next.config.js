const path = require('path')
const { I18NextHMRPlugin } = require('i18next-hmr/plugin');

module.exports = {
    webpack(config, options) {
        if (!options.isServer && config.mode !== 'production') {
            const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
            config.plugins.push(
                new I18NextHMRPlugin({
                    localesDir: path.resolve(__dirname, '../public/static/locales')
                })
            );
        }

        return config;
    }
}
