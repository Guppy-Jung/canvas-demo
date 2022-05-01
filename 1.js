// 解决画得太快连不成线的问题
let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.strokeStyle = 'none';
ctx.lineWidth = 10;
// 表示节点的连接是圆的（节点即点与点之间）
// ctx.lineJoin = "round"
// lineCap可以解决划线锯齿状问题
ctx.lineCap = "round"

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}



// ctx.lineTo(0, 500);
// 把最后一个点与起始点连起来
// ctx.closePath();
// stroke用于描边，用ctx.fill()就是实现填充效果

let painting = false
let last

var isTouchDevice = 'ontouchstart' in document.documentElement


if (isTouchDevice) {
    canvas.ontouchstart = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        last = [x, y]
    }
    canvas.ontouchmove = (e) => {
        // console.log(e)
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        drawLine(last[0], last[1], x, y)
        last = [x, y]
        // ctx.beginPath();
        // ctx.arc(x, y, 10, 0, 2 * Math.PI)
        // ctx.stroke()
        // ctx.fill()

    }
} else {
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clintX, e.clientY]
    }
    canvas.onmousemove = (e) => {
        if (painting == true) {
            drawLine(last[0], last[1], e.clientX, e.clientY)
            last = [e.clientX, e.clientY]
        }
    }
    console.log("根据’ontouchstart‘ in document.documentElement判断出该设备不支持触摸屏 ")
    canvas.onmouseup = () => {
        painting = false
    }
}

// 移动端画线时，页面也跟着滑动解决办法：在style.css里面加入以下样式：body{ overflow: hidden; }
















