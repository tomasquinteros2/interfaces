let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
let img4 = document.querySelector("#img4")
let text1 = document.querySelector("#contenido1")
let text2 = document.querySelector("#contenido2")
let text3 = document.querySelector("#contenido3")
let text4 = document.querySelector("#contenido4")

let header = document.getElementById("header");
let container = document.getElementById("header-container");
let logoheader = document.getElementById("logo-header");
let logo = document.querySelector("#logo");

/*** grupo1 */
let spider1 = document.querySelector("#img-spider-man")
let spider2 = document.querySelector("#img-gwen")
let spider3 = document.querySelector("#img-miles")
let teladeaniaDerecha = document.querySelector("#teladeaniaDerecha")
let teladeaniaIzquierda = document.querySelector("#teladeaniaIzquierda")
/** edificios */
let edificioIzq = document.querySelector("#img-edificioIzq")
let edificioCentro = document.querySelector("#img-edificioCentro")
let edificioDerecha = document.querySelector("#img-edificioDerecha")
let cielo = document.querySelector("#img-fondo");
/** duende */
let duende = document.querySelector("#duende-verde")
let posPersonaje4Top = duende.getBoundingClientRect().top;
let posPersonaje4Bottom = duende.getBoundingClientRect().bottom;

//ghost spider
let card1= document.getElementById('ghostc1');
let card2= document.getElementById('ghostc2');
let card3= document.getElementById('ghostc3');

window.onscroll = function () {
    const scrolled = window.scrollY;
    let scrollPosition = window.pageYOffset;    
    /** grupo 1 paralax */
    spider1.style.top = 38 - scrolled * 0.2 + "px";
    spider2.style.top = 0 - scrolled * 0.2 + "px";
    spider3.style.top = -35 - scrolled * 0.2 + "px";
    teladeaniaIzquierda.style.top = 9 - scrolled * 0.2 + "px";
    teladeaniaDerecha.style.top = 18 - scrolled * 0.2 + "px";

    edificioIzq.style.top = 30 + scrolled * 0.5 + "px";
    edificioCentro.style.top = 520 + scrolled * 0.5 + "px";
    edificioDerecha.style.top = 30 + scrolled * 0.5 + "px";
    cielo.style.top = 1 + scrolled * 0.6 + "px";
//gwen
    card1.style.top= 1130 - scrolled * 0.5 + "px";
    card2.style.top= 1280 - scrolled * 0.5 + "px";
    card3.style.top= 1460 - scrolled * 0.5 + "px";

    /** duende scroll */
    if (((window.scrollY >= posPersonaje4Top+250))&&((posPersonaje4Bottom+100)>=window.scrollY)){
        duende.style.top = 85 + scrolled * 0.21 + 'px';
    }
    if(window.scrollY < posPersonaje4Top+250){
        duende.style.top = 85 + "px";
    }
    /**cards columnas */
    if(scrollPosition>=3800 && scrollPosition<4200){
        img1.style.position = "sticky";
        img1.style.top = 250 + "px";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img1.style.display = "block";
        text1.style.opacity = "1"
        text2.style.opacity = "0"
    }
    if(scrollPosition>4200 && scrollPosition<4620){
        img2.style.position = "sticky";
        img2.style.top = 250 + "px";
        img1.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img2.style.display = "block";
        text1.style.opacity = "0"
        text2.style.opacity = "1"
        text3.style.opacity = "0"
    }
    if(scrollPosition>4620 && scrollPosition<5130){
        img3.style.position = "sticky";
        img3.style.top = 250 + "px";
        img1.style.display = "none";
        img2.style.display = "none";
        img4.style.display = "none";
        img3.style.display = "block";
        text2.style.opacity = "0"
        text3.style.opacity = "1"
        text4.style.opacity = "0"
    }
    if(scrollPosition>5130){
        img4.style.position = "sticky";
        img4.style.top = 250 + "px";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "block";
        text3.style.opacity = "0"
        text4.style.opacity = "1"
    }
    if(scrollPosition>=50){
        container.style.zIndex = "10";
        header.style.height = 91+"px";
    }
    if(scrollPosition<50){
        header.style.height = 227+"px";
        container.style.zIndex = "1";
    }
    if (window.scrollY > 0) {
        logo.classList.add("fixed-img");
        logo.style.zIndex=20;
      } else {
        logo.classList.remove("fixed-img");
        logo.style.zIndex=3;
      }
}
