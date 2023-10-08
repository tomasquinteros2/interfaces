"use strict"
document.addEventListener("DOMContentLoaded", function (){

let formRegister = document.querySelector("#form-register");

document.querySelector("#register").addEventListener("click", () => {
    formRegister.classList.add("showForm");
})

})