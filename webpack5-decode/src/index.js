// import styles from "./index.css"
import "./less.less"
import "./sass.scss"
import "../doc/use"
import "./index.css"

// 如果 css-loader 中使用了  esModule: false, 会对它进行包装, 得到的 styles 为
// {default: 后面是 styles 的对象}
let styles2 = require("./index.css")

console.log("css 模块化 styles -->>", styles);
console.log("css 模块化 styles2 -->>", styles2);
console.log(" -- index.js 中 其实就可以当成是我吗项目中--->>", process.env.NODE_ENV);
