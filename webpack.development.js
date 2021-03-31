const webpackConfig = require('./webpack.config');
const DashboardPlugin = require("@module-federation/dashboard-plugin");

module.exports = {
    ...webpackConfig,
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
    plugins: [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
            name: "glitr_web",
            filename: "remoteEntry.js",
            remotes: {
                'glitr-ui': `glitr_ui@https://glitr-io.github.io/glitr-ui/remoteEntry.js`,
            },
            shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
        }),
        // new DashboardPlugin({
        //     dashboardURL: "http://localhost:3000/api/update",
        //     metadata: {
        //         source: {
        //             url: "http://github.com",
        //         },
        //         remote: "http://localhost:9000/remoteEntry.js",
        //     },
        // }),
    ],
}