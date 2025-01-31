'use strict'
const progressEl = document.getElementById('progress')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
const circlesEl = document.querySelectorAll('.circle')

let currentActive = 1

nextEl.addEventListener('click', () => {
    currentActive++

    if(currentActive > circlesEl.length) {
        currentActive = circlesEl.length
    }

    update()
})

prevEl.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update(){
    circlesEl.forEach((circle ,index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
}
 

function update() {
    circlesEl.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progressEl.style.width = (actives.length - 1) / (circlesEl.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prevEl.disabled = true
    } else if(currentActive === circlesEl.length) {
        nextEl.disabled = true
    } else {
        prevEl.disabled = false
        nextEl.disabled = false
    }
}