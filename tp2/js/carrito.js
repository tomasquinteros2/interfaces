'use strict'
let agregables = document.querySelectorAll(".btn-agregar");
let carrito= document.querySelector("#carrito");
let agregados = 0;
const estadosBotones=Array.from({ length: agregables.length }, () => false);

agregables.forEach((agregable, index) => {

    estadosBotones[index]= false;

    agregable.addEventListener('click',() => {

        if(estadosBotones[index]){
            agregados--;
        }else{
            agregados++;
        }

        toggleShow();
        carrito.innerHTML= agregados;
        estadosBotones[index] = !estadosBotones[index]; 
    });
});

function toggleShow(){
    if(agregados>0){
        carrito.classList.add("show");
    }else if(agregados<=0){
        carrito.classList.remove("show");
    }
    

};