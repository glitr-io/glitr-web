const webpackConfig = require('./webpack.config');
// const DashboardPlugin = require("@module-federation/dashboard-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
    output: {
        publicPath: "http://localhost:9000/",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
    },
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    plugins: [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
            name: "glitr_web",
            filename: "remoteEntry.js",
            remotes: {
                // 'glitr-ui': `glitr_ui@https://glitr-io.github.io/glitr-ui/remoteEntry.js`,
                'glitr-ui': `glitr_ui@http://localhost:9001/remoteEntry.js`,

            },
            shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
        }),
        // new DashboardPlugin({
        //     dashboardURL: "http://localhost:3000/api/update",
        // }),
    ],
}