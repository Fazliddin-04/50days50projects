const contents = document.querySelectorAll('.phone img')
const tabs = document.querySelectorAll('.phone nav ul li')

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    hideAllContents()
    hideAllTabs()
    
    tab.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  contents.forEach((content) => { content.classList.remove('show') })
}

function hideAllTabs() {
  tabs.forEach((tabs) => { tabs.classList.remove('active') })
}

