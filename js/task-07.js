const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

// console.log(inputEl, spanEl);


inputEl.addEventListener('input',onInputSize)

function onInputSize(event) {
    const spanFontsize= Number(event.currentTarget.value)
    spanEl.style.fontSize = `${spanFontsize}px`
   
}