const webpack = require('webpack');

module.exports = {
    entry: './scripts/start',
    output: {
        filename: "build.js"
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default']
        })
    ]
};