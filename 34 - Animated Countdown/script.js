const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
const pyro = document.querySelector('.pyro')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    pyro.innerHTML = ``
    document.body.style.background = '#fff'
    document.body.style.color = '#000'

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
                pyro.innerHTML = `
                <div class="before"></div>
                <div class="after"></div>
                `
                document.body.style.background = '#000'
                document.body.style.color = '#fff'
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})