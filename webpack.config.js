const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'glitr_web',
        }),
        new ModuleFederationPlugin({
            name: "glitr_web",
            filename: "remoteEntry.js",
            remotes: {
                'glitr_ui': "glitr_ui@https://glitr-io.github.io/glitr-ui/remoteEntry.js",
            },
            shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        }),
    ],
};