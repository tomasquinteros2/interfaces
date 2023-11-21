'use strict'
document.addEventListener("DOMContentLoaded", function (){
    let intervalo = 0;
    //Preloader//
    let number = document.querySelector('#percentage');
    let counter = 0;
    let loader = document.querySelector('#onload');
    intervalo = setInterval(()=>{
        if(counter==100){
            console.log("if")
            clearInterval(intervalo);
            loader.remove(loader);
        }else{
            console.log("else")
            counter+=1;
            number.textContent = counter + "%";
        }
    }, 3);

})