"use strict"

document.addEventListener("DOMContentLoaded", load);
//document.querySelector("btn-agregar").addEventListener("click", btncarrito);
function load(){
    const carruseles = [...document.querySelectorAll(".slide")];
    //console.log(carruseles);
    const nxtBtn = [...document.querySelectorAll(".button-right")];
    const preBtn = [...document.querySelectorAll(".button-left")];
    const nxtBtnM = [...document.querySelectorAll(".button-right-mobile")];
    const preBtnM = [...document.querySelectorAll(".button-left-mobile")];
    const addBtn = [...document.querySelectorAll(".btn-agregar")];
    const removeBtn = [];

    


    carruseles.forEach((item,i)=> {
        let dimensionContenedor = item.getBoundingClientRect();
        let contenedorWidth = dimensionContenedor.width;
        //console.log(item.scrollWidth);
        //console.log(contenedorWidth);
        //console.log(item.scrollWidth/contenedorWidth)

        nxtBtn[i].addEventListener("click", () => {
            
        /*paginacion slide hacia adelante*/
            let dimensionContenedor = item.getBoundingClientRect();
            let contenedorWidth = dimensionContenedor.width;
            item.scrollLeft += contenedorWidth;
            preBtn[i].classList.add("btn-pre-anable");
            if((item.scrollLeft + contenedorWidth)>1500){
                nxtBtn[i].classList.add("btn-next-disanable");
            }
            //
        })
        /*paginacion slide hacia atras*/
        preBtn[i].addEventListener("click", () => {
            let dimensionContenedor = item.getBoundingClientRect();
            let contenedorWidth = dimensionContenedor.width;
            item.scrollLeft -= contenedorWidth;
            if((item.scrollLeft - contenedorWidth)  < 0){
                preBtn[i].classList.remove("btn-pre-anable");
            }
            nxtBtn[i].classList.remove("btn-next-disanable");
        })
        nxtBtnM[i].addEventListener("click", () => {
            
       
        /*paginacion slide hacia adelante*/
            let dimensionContenedor = item.getBoundingClientRect();
            let contenedorWidth = dimensionContenedor.width;
            item.scrollLeft += contenedorWidth;
            console.log(item.scrollLeft += contenedorWidth)
            preBtnM[i].classList.add("btn-pre-anable");
            if((item.scrollLeft += contenedorWidth)>1300){
                nxtBtnM[i].classList.add("btn-next-disanable");
            }

        })
        preBtnM[i].addEventListener("click", () => {
            let dimensionContenedor = item.getBoundingClientRect();
            let contenedorWidth = dimensionContenedor.width;
            item.scrollLeft -= contenedorWidth;
            console.log(item.scrollLeft -= contenedorWidth)
            if((item.scrollLeft - contenedorWidth)  < 0){
                preBtnM[i].classList.remove("btn-pre-anable");
            }
            nxtBtnM[i].classList.remove("btn-next-disanable");
        })
    }) 
    addBtn.forEach((Element,i) =>{
        addBtn[i].addEventListener("click", () =>{
            const botonesADD = [...document.getElementsByClassName("btn-agregar")];
            if(botonesADD.includes(addBtn[i])){
                if(!Element.classList.contains("btn-remover-active")){
                    addBtn[i].classList.add("btn-remover-active");
                }
                else{
                    addBtn[i].classList.remove("btn-remover-active");
                }   
            }
        })

    })


}