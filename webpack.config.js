const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        background: './src/background.ts',
        popup: './src/popup.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'src/dist'),
    },
    devtool: 'cheap-source-map',
    plugins: [
        new VueLoaderPlugin(),
    ]
};
