
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

window.onscroll = function () {
    let scrollPosition = window.pageYOffset;    
    
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
