const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtm = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value')
// console.log(decrementBtn, incrementBtm, valueEl);

let counterValue = 0;




decrementBtn.addEventListener("click", () => {
    valueEl.textContent = counterValue -= 1
    // console.log(valueEl.textContent);
    
});
incrementBtm.addEventListener("click", () => {
    valueEl.textContent=counterValue+=1
    //   console.log(valueEl.textContent);
})