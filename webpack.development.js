const webpackConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    ...webpackConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
}