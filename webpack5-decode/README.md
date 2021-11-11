```js
{
    test: /\.js$/,
    use: {
        loader: "babel-loader", // babel-loader本身只是一个转换函数, 并不能识别 js语法,也不知道如何转换.
        options: {
            presets: ["@babel-preset-env", "@babel/preset-react"],
            presets: [ // 有些语法 webpack不认识, 要把 ES6,ES7 编译成 ES5 React编译成 ES5
                ["@babel/plugin-proposal-decorators", { lagacy: true }],
                ["@babe/plugin-proposal-class-properties", { loose: true }]
            ],
        }
    }
},

```
- 一些代码webpack 是不认识的, 比如react jsx 有些代码, 浏览器不兼容的, 比如 es6, es7
- - 把 es6 es7 编译成 es5
- React 编译成 ES5 

- 靠 babel-loader
- babel-loader只是一个转换函数, 并不能识别js的语法, 也不知道如何转换
- 得认识 js代码, 知道如果把老代码转换成 新代码
- @babel/core 它是babel的核心模块, 它认识 js模块, 能够识别js代码, 不知道如何转换写法
- babel插件知道如何把牢的语法转换成新的语法, 每个插件会对应一个语法, 比如说箭头函数. 
