"use strict"

document.addEventListener("DOMContentLoaded", load);

function load(){
    const carruseles = [...document.querySelectorAll(".slide")];
    console.log(carruseles);
    const nxtBtn = [...document.querySelectorAll(".button-right")];
    const preBtn = [...document.querySelectorAll(".button-left")];

    carruseles.forEach((item,i)=> {
        let dimensionContenedor = item.getBoundingClientRect();
        let contenedorWidth = dimensionContenedor.width;
        console.log(item.scrollWidth);
        console.log(contenedorWidth);
        console.log(item.scrollWidth/contenedorWidth)

        nxtBtn[i].addEventListener("click", () => {
            
       
        /*paginacion slide hacia adelante*/
                item.scrollLeft += contenedorWidth;
        })
        /*paginacion slide hacia atras*/
        preBtn[i].addEventListener("click", () => {
            item.scrollLeft -= contenedorWidth;
        })
    }) 
}