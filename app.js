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