


var out = document.getElementById('output')

window.addEventListener('keydown', (e) => {
  out.textContent = `{
    which: ${e.which},
    keyCode: ${e.keyCode},
    code: ${e.code},
    key: ${e.key}
  }`
})
