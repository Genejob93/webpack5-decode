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

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        // 指定输出目录, 默认是 dist 目录, 目录的配置必须是一个 绝对路径
        path: path.resolve(__dirname, "dist"),
        // 指定文件名, 默认是 main.js
        filename: "main.js"
    },
    devtool: false,
    devServer: {
        port: 8080, // 配置开发预览服务器的端口号
        open: true // 自动打开浏览器
    },
    resolve: {
        extensions: [".js", ".vue", ".json", ".css"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    module: { // loader配置
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        url: true, // 启动 或者 禁用  url 解析功能.  url(./tang.jpg);
                        import: true, // 是否允许 或者说 禁用 @import 语法处理 @import "base.css"
                        modules: false, // 是否允许 css 模块化
                        sourceMap: true, // 是否生成 sourceMap
                        importLoaders: true, // 放在 CSS 兼容性的时候演示
                        // 默认情况下,  css-loader 会生成一个使用 ES Module的模块对象, 如果你设置为 true 的话, 那就会包装成 ESMODULES,导出是一个对象
                        // 用 let styles2  = require ("./index.css") 方式引入时, {default:{}} 中 default 才是对应的 css 对象
                        esModule: true
                    }
                }, "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png|bmp|gif)/,
                type: "asset/resource",
                generator: {
                    filename: '[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}

// process.env.NODE_ENV 这个指的是当前的 webpack 打包时的 node 环境里的变量
// process 代表当前的 node 进程,  env 代表环境变量,   NODE_ENV 代表一个 key 值.
// console.log("cross-env 来修改 node 端的 process.env.NODE_ENV 的值 --->>", process.env.NODE_ENV);
// module.exports = (env) => {
//     console.log("%c --env 设置的值 --->>>", "color:red", env);
//     return {
//         mode: env.production ? "production" : "development",
//         entry: "./src/index.js",
//         output: {
//             // 指定输出目录, 默认是 dist 目录, 目录的配置必须是一个 绝对路径
//             path: path.resolve(__dirname, "dist"),
//             // 指定文件名, 默认是 main.js
//             filename: "main.js"
//         },
//         devtool: "source-map",
//         module: { // loader配置
//             rules: [
//                 {
//                     test: /\.css$/,
//                     use: ["style-loader", "css-loader"]
//                 }
//             ]
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: "./src/index.html"
//             }),
//             new webpack.DefinePlugin({
//                 "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
//             })
//         ]
//     }
// }