const h = document.querySelector("#h")
const b = document.body
const unit = 4
const mouseDownFunc = () => b.addEventListener('mousemove', moveFunc)
const mouseUpFunc = () => b.removeEventListener('mousemove', moveFunc)
const moveFunc = (e) => {
    let x = e.pageX / window.innerWidth - 0.5
    let y = e.pageY / window.innerHeight - 0.5

    h.style.transform = `
        perspective(${500 * unit}vmin)
        rotateX(${ y * 30 + 66}deg)
        rotateZ(${ -x * 420 + 30}deg)
        translateZ(-${2 * unit}vmin)
    `
}
h.addEventListener('mousedown', mouseDownFunc)
b.addEventListener('mouseup', mouseUpFunc)