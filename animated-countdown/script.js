const counter = document.querySelector('.counter');
const nums = document.querySelectorAll('.nums span');
const final = document.querySelector('.final');
const replay = document.querySelector('.replay');

function runAnimation() {
    const numsLenth = nums.lenth;
    nums.forEach((num, idx) => {
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== numsLenth - 1) {
                num.classList.remove('in');
                num.classList.add('out');
                console.log('hi');
            }
            else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            }
            else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        })
    })
}

function reset() {
    counter.classList.remove('hide')
    final.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = '';
    })
    nums[0].classList.add('in');
}

runAnimation();

replay.addEventListener('click', () => {
    reset();
    runAnimation();
})