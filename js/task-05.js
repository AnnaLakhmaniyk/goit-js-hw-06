const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
// console.log(inputName, spanName);



inputName.addEventListener('input',onInput )

function onInput(event) {
    // console.log(event.currentTarget.value);
    spanName.textContent = event.currentTarget.value.trim()||"Anonymous"
  
}