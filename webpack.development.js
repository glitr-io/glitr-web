const webpackConfig = require('./webpack.config');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    ...webpackConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
    },
    plugins: [
        ...webpackConfig.plugins,
        new DashboardPlugin()
    ],
}