const open = document.getElementById('open')
const close = document.getElementById('close')
const circle = document.getElementById('circle')
const container = document.querySelector('.container')

open.addEventListener('click', () => { container.classList.add('show-nav'); circle.classList.add('close') })

close.addEventListener('click', () => { container.classList.remove('show-nav'); circle.classList.remove('close') })