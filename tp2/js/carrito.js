'use strict'
let agregables = document.querySelectorAll(".btn-agregar");
let carrito= document.querySelector("#carrito");
let agregados = 0;


agregables.forEach(agregable => {
    agregable.addEventListener('click',() => {
        agregados++ ;
        carrito.innerHTML=agregados;
    });
});