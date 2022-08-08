const pwdInp = document.getElementById('password')
const bg = document.getElementById('background')

pwdInp.addEventListener('input', (e) => {
  let length = e.target.value.length
  let blurValue = 20 - (length * 2)
  bg.style.filter = `blur(${blurValue <= 0 ? 0 : blurValue}px)`
}
)
