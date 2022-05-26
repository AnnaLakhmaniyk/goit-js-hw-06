const inputEl = document.querySelector('#validation-input')
// console.log(inputEl);


inputEl.addEventListener('blur',onInputBlur)


function onInputBlur(event) {
    let inputLength = Number(inputEl.dataset.length);
    // console.log(inputLength );
    const inputValue = event.currentTarget;
    if (inputValue.value.trim().length === inputLength) {
     return onClassEl(inputValue,'valid','invalid')
    } 
onClassEl(inputValue,'invalid','valid')
}

function onClassEl(item, add, remove) {
    item.classList.add(add);
    item.classList.remove(remove)
}

