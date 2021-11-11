/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： yangjianyun@58.com
 * @date: 2021-11-11 21:35:48
 * @description: webpack默认配置文件
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

// module.exports = {
//     // mode: "production",
//     entry: "./src/index.js",
//     output: {
//         // 指定输出目录, 默认是 dist 目录, 目录的配置必须是一个 绝对路径
//         path: path.resolve(__dirname, "dist"),
//         // 指定文件名, 默认是 main.js
//         filename: "main.js"
//     },
//     devtool: "source-map",
//     module: { // loader配置
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html"
//         })
//     ]
// }

// process.env.NODE_ENV 这个指的是当前的 webpack 打包时的 node 环境里的变量
// process 代表当前的 node 进程,  env 代表环境变量,   NODE_ENV 代表一个 key 值.
console.log("cross-env 来修改 node 端的 process.env.NODE_ENV 的值 --->>", process.env.NODE_ENV);
module.exports = (env) => {
    console.log("%c --env 设置的值 --->>>", "color:red", env);
    return {
        mode: env.production ? "production" : "development",
        entry: "./src/index.js",
        output: {
            // 指定输出目录, 默认是 dist 目录, 目录的配置必须是一个 绝对路径
            path: path.resolve(__dirname, "dist"),
            // 指定文件名, 默认是 main.js
            filename: "main.js"
        },
        devtool: "source-map",
        module: { // loader配置
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            })
        ]
    }
}