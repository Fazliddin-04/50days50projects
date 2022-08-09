const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    if (e.target.nodeName == 'SMALL') {
      selectedRating = e.target.innerHTML
    } else {
      selectedRating = e.target.nextElementSibling.innerHTML
    }
  } else if (e.target.classList.contains('rating')) {
    removeActive()
    e.target.classList.add('active')
    selectedRating = e.target.querySelector('small').innerHTML
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <p>Feedback: ${selectedRating}</p>
    <p>We'll use your feedback to improve our customer support
  `
})


function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    const element = ratings[i];
    element.classList.remove('active')
  }
}