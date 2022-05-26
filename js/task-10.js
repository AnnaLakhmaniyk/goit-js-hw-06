function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
// не доходить
// // console.log(inputEl, buttonCreate, buttonDestroy, boxesEl);
// inputEl.addEventListener('input', getValue)
// buttonCreate.addEventListener('click', createBoxes)
// buttonDestroy.addEventListener('click',)


// function getValue(event) {
//  const value = Number(event.currentTarget.value);

//   if (!value) return;

//   createBoxes(value);
// }

  
// function createBoxes(event) {
//   let element = '';
//   let size = 30;
//   for (let i = 0; i < event; i += 1) {
    
// element+=`<div class ='item' style ='width':${size}px; height:${size} ;background-color:${getRandomHexColor()} `
//     size += 10;
//   }
 
//   return element;
// }

