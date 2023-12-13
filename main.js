const password = document.getElementById('userPassword');
const passwordConfirm = document.getElementById('confirmPassword');
const btn = document.querySelector('#btn');
const div = document.querySelector('#error-div');

btn.addEventListener('click', checkPassword);

function checkPassword(){
    if(password.value == passwordConfirm.value){
        return;
    }
    else{
        const myError = document.createElement('p');
        myError.textContent = "* Passwords do not match";
        myError.setAttribute("class", "error");
        div.appendChild(myError);

    }
}
