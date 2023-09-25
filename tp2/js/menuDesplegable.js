'use strict'

document.querySelector('.menu').addEventListener("click", toggleMenu);

function toggleMenu(){
    document.querySelector('.menuDesplegable').classList.toggle("show");

}