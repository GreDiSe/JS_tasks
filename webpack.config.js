let bootstrap = require('bootstrap');
let jquary = require('jquery');
const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
    entry: './scripts/start',
    output: {
        filename: "build.js"
    },

    plugins: [
        new webpack.EnvironmentPlugin('NODE_ENV'),

        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ]
};