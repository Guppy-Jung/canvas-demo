
// 拿到ID是可以做全局变量的，既然是全局变量，那么久跟Object一样可以调用方法
// canvas.onclick = (e)=>{
//     console.log(e.clientX)
//     console.log(e.clientY)
//     // console.log调试大法
// }

// onmousemove事件表示鼠标移动触发
// 下面代码使用JS去操作DOM，因为跨线程，所以性能不好，画出来的会卡顿，所以才需要canvas
// canvas.onmousemove = function (e) {
//     console.log(e.clientX)
//     console.log(e.clientY)
//     // console.log调试大法
//     let div = document.createElement('div')
//     div.style.position = 'absolute'
//     div.style.left = e.clientX + 'px'
//     div.style.top = e.clientY + 'px'
//     // div.style.border = '1px solid red'
//     div.style.height = '6px'
//     div.style.width = '6px'
//     div.style.marginLeft = '-3px'
//     div.style.marginTop = '-3PX'
//     div.style.borderRadius = '50%'
//     div.style.backgroundColor = 'black'
//     // 用createElement创建后的div只是在内存中，要想出现在页面用要用appendChild添加到canvas元素中
//     canvas.appendChild(div)
// }

// 用canvas划线（canvas默认是一个inline元素，可以从板块的computed中看display），canvas是类似与img的元素，不是div
// 与img元素一样，canvas也可以直接写宽高，只不过与img一样，会被css覆盖
// 用canvas代码，js不会新建DOM结点，使用显卡和cpU直接算出来
let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");

let painting = false

ctx.fillStyle = "black";
ctx.strokeStyle = 'none'

canvas.onmousedown = () => {
    painting = true
}
canvas.onmousemove = (e) => {
    if (painting === true) {
        // console.log(e.clientX)
        // console.log(e.clientY)
        // ctx.fillRect(e.clientX - 5, e.clientY - 5, 10, 10)
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    } else {
        console.log("什么都不做")
    }

}
canvas.onmouseup = () => {
    painting = false
}


