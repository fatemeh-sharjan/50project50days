'use strict'
const searchEl = document.querySelector('.search')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click',()=> {
    searchEl.classList.toggle('active');
})