const formEl= document.querySelector('.login-form')
// console.log(formEl);


formEl.addEventListener('submit',onSubmit)

function onSubmit(event) {
    event.preventDefault()

    const elementsForm = event.currentTarget.elements;
    const email = elementsForm.email.value.trim();
    const password = elementsForm.password.value.trim();
    
    if (!email|| !password ) {
     return alert('ops!')
    }

    const result = {
        email:email,
        password:password,
}

    console.log(result);
    
    event.currentTarget.reset();
}