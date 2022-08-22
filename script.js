const pwd = document.querySelector("#pwd");
const conPwd = document.querySelector("#conPwd");
const form = document.querySelector("#form");
const errorMsg = document.querySelector('.error');

form.addEventListener("submit", (event) => {
    if(pwd.value != conPwd.value){
        errorMsg.textContent = "Passwords do not match";
        event.preventDefault();
    }
})