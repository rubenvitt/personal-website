// Webpack uses this to work with directories
const path = require('path');
const rules = require('./rules')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    module: {
        rules: rules
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],

    devServer: {
        contentBase: __dirname + "/../public/",
        inline: true,
        compress: true,
        port: 3000
    },

    // Path to your entry point. From this file Webpack will begin his work
    entry: './src/js/index.js',

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, '../public/dist'),
        filename: 'bundle.js'
    },

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: 'development'
};
