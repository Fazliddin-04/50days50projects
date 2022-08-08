const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


const list = document.getElementById('nav-list')
const bars = document.getElementById('open')
const times = document.getElementById('close')

bars.addEventListener('click', () => {
    bars.classList.add('active')
    setInterval(() => {
        bars.classList.remove('active')
    }, 1500)
    list.classList.add('active')
})
times.addEventListener('click', () => {
    times.classList.add('active')
    setInterval(() => {
        times.classList.remove('active')
    }, 1500)
    list.classList.remove('active')
})