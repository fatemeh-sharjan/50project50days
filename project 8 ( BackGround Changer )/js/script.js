'use strict'
const textEl = document.querySelector('input');
const bodyEl = document.querySelector('body');
textEl.addEventListener('keyup', (e) => {
    const bgColor = e.target.value;
    bodyEl.style.backgroundColor = bgColor;

    setTimeout(() => {
        resetBG();
    }, 3000);
});

function resetBG() {
    bodyEl.style.backgroundColor = 'white';
    textEl.value = '';
}