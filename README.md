## hello-nodejs

轻松学node.js

视频

- [https://www.rails365.net](https://www.rails365.net/movies/qing-song-xue-nodejs-ji-chu-pian-1-ke-cheng-jie-shao-yu-kai-fa-huan-jing-da-jian)
- [B站](https://www.bilibili.com/video/av21010015)



相关连接

- [Node.js官网](https://nodejs.org/zh-cn/)
- [Node.js中文网](http://nodejs.cn/)
- [CNode：Node.js专业中文社区](https://cnodejs.org/)

+++

## 课程介绍与开发环境搭建

- 主要包括
  - node.js基础知识
  - web服务器
  - 异步 同步 阻塞 非阻塞
- 课程基础
  - JavaScript 基础
  - html 基础
  - 命令行基础
- Node.js介绍
  - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
  - Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
  - Node.js 的包管理器 npm，是全球最大的开源库生态系统
  - JavaScript 是脚本语言，需要解析器才能执行，浏览器就充当了解析器
  - V8 引擎是开源的，由 C++ 语言编写，性能高
- Node.js安装
  - 从官网中下载安装即可，网上也有很多安装教程。
  - 如何验证是否安装成功，命令行运行`node -v`显示版本号`v12.13.1`
- Node.js用途
  - JavaScript 运行环境
  - 操作文件(grunt gulp webpck)
  - 操作数据库

运行一个JavaScript文件(例app.js) 只需在app.js所在文件夹下运行命令`node app`或`node app.js`

## 全局对象

[Node.js官方文档-global](http://nodejs.cn/api/globals.html)

- 全局对象
  - Class: Buffer
  - clearImmediate(immediateObject)
  - clearInterval(intervalObject)
  - clearTimeout(timeoutObject)
  - console
  - global
  - process
  - setImmediate(callback[, ...args])
  - setInterval(callback, delay[, ...args])
  - setTimeout(callback, delay[, ...args])
- 以下的变量虽然看似全局的，但实际上不是。 详情[Node.js-module](http://nodejs.cn/api/modules.html)
  - 全局变量在所有模块中都可以使用。
  - __dirname
  - __filename
  - exports
  - module
  - require()

实例

~~~javascript
console.log("Hello World");
console.log(__dirname);
console.log(__filename);

//一次的定时器
setTimeout(function () {
    console.log('3 seconds have passed')
},3000);

//es6写法
setTimeout(()=>{
    console.log('3 seconds have passed')
},3000);

// 每间隔2秒不断执行的定时器
setInterval(function () {
    console.log("2 seconds have passed");
}, 2000);


var time = 0
var timer = setInterval(function () {
    time += 2;
    console.log(time + " seconds have passed");
    if (time > 6) {
        clearInterval(timer);
        console.log("clearInterval")
    }
}, 2000);

console.dir(global);
~~~

