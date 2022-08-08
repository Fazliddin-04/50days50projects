const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We love programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        textEl.style.transition = '1.6s ease'
        textEl.style.opacity = '0'
        setTimeout(() => {
            idx = 1
            textEl.style.opacity = '1'
        }, 1000)


    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)