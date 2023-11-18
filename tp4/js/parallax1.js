'use strict'

let grupo1 = document.getElementById("section-one");
let edificioCentro = document.getElementById("img-edificioCentro");
let edificioIzq = document.getElementById("img-edificioIzq");
let edificioDerecha = document.getElementById("ing-edificioDerecha");
let milesM= document.getElementById("img-miles");
let spiderMan= document.getElementById("img-spider-man");
let gwenStacy= document.getElementById("img-gwen");
let telaDer= document.getElementById("teladeaniaDerecha");
let telaIzq= document.getElementById("teladeaniaIzquierda");
let spiders = document.getElementById("spiders-group-one");

grupo1.onscroll = function () {
    console.log('entra a funcion');
    let y = grupo1.scrollTop;
    edificioCentro.style.bottom = (-34) - y * 0.1 + "px";
    edificioDerecha.style.bottom = (-40) - y * 0.1 + "px";
    edificioIzq.style.top = 40 + y * 0.1 + "px";
    milesM.style.top = (-35) - y * 0.1 + "px";
    telaDer.style.top = 18 + y * 0.1 + "px";
    gwenStacy.style.top = 0 + y * 0.1 + "px";
    spiderMan.style.top= 38 + y * 0.01 + "px";
    telaIzq.style.top= 9 + y * 0.01 + "px";
    spiders.style.top= 360 + y * 0.01  + "px";
  };
