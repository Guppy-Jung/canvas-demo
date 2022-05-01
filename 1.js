
// 拿到ID是可以做全局变量的，既然是全局变量，那么久跟Object一样可以调用方法
// canvas.onclick = (e) => {
//     console.log(e.clientX)
//     console.log(e.clientY)
//     // console.log调试大法
// }


canvas.onclick = function (e) {
    console.log(e.clientX)
    console.log(e.clientY)
    // console.log调试大法
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'
    // div.style.border = '1px solid red'
    div.style.height = '6px'
    div.style.width = '6px'
    div.style.marginLeft = '-3px'
    div.style.marginTop = '-3PX'
    div.style.borderRadius = '50%'
    div.style.backgroundColor = 'black'
    // 用createElement创建后的div只是在内存中，要想出现在页面用要用appendChild添加到canvas元素中
    canvas.appendChild(div)
}