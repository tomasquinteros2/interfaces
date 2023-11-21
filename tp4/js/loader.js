'use strict'
document.addEventListener("DOMContentLoaded", function (){

    //Preloader//
    let number = document.querySelector('#percentage');
    let counter = 0;
    let loader = document.querySelector('#onload');
    setInterval(()=>{
        if(counter==100){
            clearInterval();
            loader.remove(loader);
            console.log('termino counter');
        }else{
            console.log('entro counter');
            counter+=1;
            number.textContent = counter + "%";
        }
    }, 30);

})