const panels = document.querySelectorAll('.panel')
const body = document.querySelector('body')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        document.body.style.background = getRandomColor()
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    var color2 = "#";
    var gradient;
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 10)];
        color2 += letters[Math.floor(Math.random() * 10)];
        gradient = `linear-gradient(${color}, ${color2})`
    }
    return gradient;
}
