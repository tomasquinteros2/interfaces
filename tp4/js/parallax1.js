'use strict'

const grupo1 = document.getElementById("section-one");
const edificioCentro = document.getElementById("img-edificioCentro");
const edificioIzq = document.getElementById("img-edificioIzq");
const edificioDerecha = document.getElementById("ing-edificioDerecha");
const milesM= document.getElementById("img-miles");
const spiderMan= document.getElementById("img-spider-man");
const gwenStacy= document.getElementById("img-gwen");
const logo= document.getElementById("img-logo");
const telaIzq= document.getElementById("telaIzq");
const telaDer= document.getElementById("telaDer");
const logoenHeader= document.getElementById("logoenHeader");

grupo1.onscroll = function () {
    let y = grupo1.scrollTop;
    edificioCentro.style.top = 1800 - y * 2.65 + "px";
    //los edificios de los costados se mueven igual
    edificioIzq.style.top = 1200 - y * 0.75 + "px";
    edificioDerecha.style.top = 800 + y * 0.5 + "px";
    //spiderman se mueve un poco mas rapido que los otros
    spiderMan.style.top = 800 + y * 0.5 + "px";
    milesM.style.top = 800 + y * 0.5 + "px";
    gwenStacy.style.top = 800 + y * 0.5 + "px";
    //las telas deberian moverse a la misma velocidad que el que las tiene
    telaDer.style.top = 800 + y * 0.5 + "px";
    telaIzq.style.top = 800 + y * 0.5 + "px";
    //el logo tiene que ser el primero en desaparecer y a eso hay que agregarle que tiene un toggle a que este en el header + el header tiene que ser sticky
    logo.style.top = 800 + y * 0.5 + "px";
  };


function toggleHeader(){
    logoenHeader.classList.toggle("show");
}