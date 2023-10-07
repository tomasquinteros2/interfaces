'use strict'
let agregables = document.querySelectorAll(".btn-agregar");
let carrito= document.querySelector("#carrito");
let agregados = 0;


agregables.forEach(agregable => {
    agregable.addEventListener('click',() => {
        toggleShow();
        agregados++ ;
        carrito.innerHTML=agregados;
    });
});

function toggleShow(){
    if(agregados>0){
        carrito.classList.add("show");
    }else if(agregados<=0){
        carrito.classList.remove("show");
    }
    

}