const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const customCheck = document.querySelector('#custom')
customCheck.checked = false

openBtn.addEventListener('click', () => {
  nav.forEach(navEl => navEl.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
  nav.forEach(navEl => navEl.classList.remove('visible'))
})

customCheck.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('desktop')
  } else {
    document.body.classList.remove('desktop')
  }
});