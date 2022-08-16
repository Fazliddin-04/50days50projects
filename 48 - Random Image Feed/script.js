const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

const colors = ['#fd6fff', '#61ec9f', '#60ebe1', '#ffca58', '#fd6fff', '#23049D', '#52006A', '#3DB2FF', '#C67ACE', '#FF9A8C']

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('div');
  img.classList.add('img')

  img.style.backgroundColor = colors[getRandomNr() - 300]
  img.style.backgroundImage = `url(${unsplashURL}${getRandomSize()})`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(idx = 10) {
  return Math.floor(Math.random() * idx) + 300
}