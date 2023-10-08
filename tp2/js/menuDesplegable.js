'use strict'

document.addEventListener("DOMContentLoaded", function (){

    
    let menuHome = document.querySelector("#menuH");
    let hamburger = document.querySelector("#menuHome");
    let closeMenuHome = document.querySelector("#cierraMenuH");
    let background = document.querySelector(".dark-background");
    let iconUser = document.querySelector("#userMenu");
    let menuUser = document.querySelector("#menuU");
    let closeMenuUser = document.querySelector("#cierraMenuU");
    let formRegister = document.querySelector("#form-register");

    document.querySelector("#cierraMenuH").addEventListener("click", () => {
        menuHome.classList.remove("show");
        background.classList.remove("on");
        hamburger.classList.remove("menuHomeOn");
        closeMenuHome.classList.add("menuHomeOff");
    })
    document.querySelector("#menuHome").addEventListener("click", () => {
        if(menuUser.classList.contains("show")){
            menuUser.classList.remove("show");
            iconUser.classList.remove("menuHomeOn");
            closeMenuUser.classList.add("menuHomeOff");
        }
        menuHome.classList.toggle("show");
        background.classList.add("on");
        hamburger.classList.add('menuHomeOn');
        closeMenuHome.classList.remove("menuHomeOff");
        check();
    })
    document.querySelector("#userMenu").addEventListener("click", () => {
        if(menuHome.classList.contains("show")){
            menuHome.classList.remove("show");
            hamburger.classList.remove("menuHomeOn");
            closeMenuHome.classList.add("menuHomeOff");
        }
        menuUser.classList.toggle("show");
        background.classList.add("on");
        iconUser.classList.add("menuHomeOn");
        closeMenuUser.classList.remove("menuHomeOff");
        check();
        
    })
    document.querySelector("#cierraMenuU").addEventListener("click", () => {
        menuUser.classList.remove("show");
        background.classList.remove("on");
        iconUser.classList.remove("menuHomeOn");
        closeMenuUser.classList.add("menuHomeOff");
        

    })

    background.onclick = function(){
        menuUser.classList.remove('show');
        menuHome.classList.remove('show');
        hamburger.classList.remove('menuHomeOn');
        closeMenuHome.classList.add("menuHomeOff");
        iconUser.classList.remove("menuHomeOn");
        closeMenuUser.classList.add("menuHomeOff");

        background.classList.remove("on");
    }
    function check(){
        if((!menuHome.classList.contains('show')) && (!menuUser.classList.contains('show'))){
            hamburger.classList.remove('menuHomeOn');
            background.classList.remove("on");
        }
    }
    document.querySelector("#register").addEventListener("click", () => {
        formRegister.classList.add("showForm");
    })
});