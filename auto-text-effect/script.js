const textEL = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I Love Programming!'
let idx = 1
let speed = 300 / speedEl.value;
function writeText() {
    textEL.innerText = text.slice(0, idx)
    idx++
    idx = idx % text.length
    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', () => {
    speed = 300 / speedEl.value
})
writeText();
