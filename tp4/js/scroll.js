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
//grupo 3
let charcard1 = document.getElementById('charCard1');
let charcard2 = document.getElementById('charCard2');
let charcard3 = document.getElementById('charCard3');
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
    if(window.scrollY > 0){
        spider1.style.transform = 'translate(0px, 0px) scale(1.1)';
        spider2.style.transform = 'translate(-40px, 0px) scale(1.1)';
        spider3.style.transform = 'translate(80px, 0px) scale(1.1)';
        teladeaniaIzquierda.style.transform = 'translate(-30px, 20px) scale(1.1)';
        teladeaniaDerecha.style.transform = 'translate(110px, 10px) scale(1.1)';
        edificioIzq.style.transform = 'scale(1.1)';
        edificioCentro.style.transform = 'scale(1.1)';
        edificioDerecha.style.transform = 'scale(1.1)';
    }
    else{
        spider1.style.transform = 'translate(0px, 0px) scale(1)';
        spider2.style.transform = 'translate(0px, 0px) scale(1)';
        spider3.style.transform = 'translate(0px, 0px) scale(1)';
        teladeaniaIzquierda.style.transform = 'translate(0px, 0px) scale(1)';
        teladeaniaDerecha.style.transform = 'translate(0px, 0px) scale(1)';
        edificioIzq.style.transform = 'scale(1)';
        edificioCentro.style.transform = 'scale(1)';
        edificioDerecha.style.transform = 'scale(1)';
    }

    cielo.style.top = 1 + scrolled * 0.6 + "px";
    //gwen
    card1.style.top= 1130 - scrolled * 0.5 + "px";
    card2.style.top= 1280 - scrolled * 0.5 + "px";
    card3.style.top= 1460 - scrolled * 0.5 + "px";

    /** duende scroll */
    //console.log(window.scrollY)
    if (((window.scrollY >= 800))&&((window.scrollY <= 1500))){
        duende.style.top = 85 + scrolled * 0.21 + 'px';
    }
    else{
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
        img2.style.position = "sitcky";
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
        img3.style.position = "sitcky";
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
        img4.style.position = "sitcky";
        img4.style.top = 250 + "px";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "block";
        text3.style.opacity = "0"
        text4.style.opacity = "1"
    }
    /* header */
    if(scrollPosition>=50){
        header.style.height = 91+"px";
    }
    if(scrollPosition<50){
        header.style.height = 120+"px";
    }
    /* logo */
    if (window.scrollY > 0) {
        logo.classList.add("fixed-img");
        logo.style.zIndex=20;
      } else {
        logo.classList.remove("fixed-img");
        logo.style.zIndex=3;
      }
    //console.log(window.scrollY);
    if(window.scrollY<1500){
        charcard1.style.transform = "translateY("+300+"px)";
        charcard2.style.transform = "translateY("+300+"px)";
        charcard3.style.transform = "translateY("+300+"px)";
        charcard1.style.opacity = 0;
        charcard2.style.opacity = 0;
        charcard3.style.opacity = 0;
    }
    if(window.scrollY >= 1500 && window.scrollY <= 1900){
        charcard1.style.transform = "translateY("+0+"px)";
        charcard1.style.opacity = 1;
        if(window.scrollY >= 1600){
            charcard2.style.transform = "translateY("+0+"px)";
            charcard2.style.opacity = 1;
            if(window.scrollY >= 1680){
                charcard3.style.transform = "translateY("+0+"px)";
                charcard3.style.opacity = 1;
            }
        }
    }
}
