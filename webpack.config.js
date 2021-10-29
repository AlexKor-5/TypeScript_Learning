const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {onlyCompileBundledFiles: true}
            }
        ]
    },
    devServer: {
        port: 3000
    }
}