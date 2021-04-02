const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackConfig = require('./webpack.config');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    plugins: [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
            name: "glitr_web",
            filename: "remoteEntry.js",
            remotes: {
                'glitr-ui': `glitr_ui@https://glitr-io.github.io/glitr-ui/remoteEntry.js`,
                // 'glitr-ui': `glitr_ui@http://localhost:9001/remoteEntry.js`,

            },
            shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } },
        }),
    ],
};