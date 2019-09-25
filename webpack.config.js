// const helpers =require('./helpers')
// const webpackMerge =require('webpack-merge');
// const moduleName =helpers.getModuleName();
// let webpackFileName = "webpack."+moduleame
const path = require('path');
module.exports = {
    entry: './src/App.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
};