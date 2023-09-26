const btn = document.querySelector('.btn');
const boxes = document.querySelector('.boxes');

btn.addEventListener('click', () => boxes.classList.toggle('big'));
// 通过不同的背景图片的位置来使不同的盒子显示同一张背景图片的不同位置
function create() {
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxes.appendChild(box);
        }
    }
}
create();