function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
// не доходить
// console.log(inputEl, buttonCreate, buttonDestroy, boxesEl);
// inputEl.addEventListener('input', )
buttonCreate.addEventListener('click', getValue)
buttonDestroy.addEventListener('click',onСlean)


function getValue(event) {
  const number = Number(inputEl.value)
  console.log(number);
  if (!number) return;
 createBoxes(number)
}

function createBoxes(event) {
  let element = []

  for (let i = 0; i < event; i += 1) {
    const arr = document.createElement('div');
    const size = 30 + i * 10;
    arr.style.width = `${size}px`;
    arr.style.height = `${size}px`;
    arr.style.backgroundColor = getRandomHexColor();
    console.log(arr);
    element.push(arr)
    console.log(element);
  }
  boxesEl.append(...element)


  inputEl.value = ''
}



function onСlean(event) {
  boxesEl.innerHTML = "";

}









