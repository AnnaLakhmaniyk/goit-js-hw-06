function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
// console.log(bodyEl, buttonEl, spanEl);


buttonEl.addEventListener('click',onColorBody)

function onColorBody() {
  const colorNew = getRandomHexColor();
  bodyEl.style.backgroundColor = colorNew ;
  spanEl.textContent = colorNew;
}