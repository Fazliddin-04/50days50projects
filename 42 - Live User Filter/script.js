const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()

  // Clear results
  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')


    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `
    listItems.push(li)

    result.appendChild(li)
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}

// additional animation

result.addEventListener('scroll', (el) => {
  const top = result.scrollTop

  const list = result.querySelectorAll('li')
  list.forEach(li => {
    li.style.opacity = '0'
    li.style.transition = '500ms ease'
    if (li.offsetTop > top) {
      li.style.opacity = '1'
    }
    if (li.offsetTop > top + 570) {
      li.style.opacity = '0'
    }

  })
})