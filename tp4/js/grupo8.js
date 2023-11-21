'use strict'
let section = document.querySelector("#fondogp8");

let gwen = document.getElementById('gwen');
let miles = document.getElementById('miles-morales');
let spiderMan = document.getElementById('spider-man');


let grupoInicial = document.querySelector("#grupoInicial")
let grupoMorales = document.querySelector("#grupoMorales");
let grupoGwen = document.querySelector("#grupoGwen")
let grupoParker = document.querySelector("#grupoParker")

let fondo = document.querySelector("#fondogp8");
let lineaArriba = document.querySelector("#line1");
let lineaAbajo = document.querySelector("#line2");
gwen.addEventListener('mouseover', function(){
    gwen.style.display = "block";
    grupoGwen.style.display = "block";
    miles.style.display = "none";
    spiderMan.style.display = "none";
    gwen.style.scale = 1.5;
    gwen.style.top = 200+"px";
    fondo.src = "img/fondos//grupo4/Rectangle 10.png"
    lineaArriba.src = "img/fondos//grupo4/linea10Up.png"
    lineaAbajo.src = "img/fondos//grupo4/linea10Down.png"
});
gwen.addEventListener('mouseout', function(){
    gwen.style.scale = 1;
    gwen.style.top = 171+"px";
    grupoGwen.style.display = "none";
    miles.style.display = "block";
    spiderMan.style.display = "block";
    fondo.src = "img/fondos/rectanguloBlanco2.png"
    lineaArriba.src = ""
    lineaAbajo.src = ""
})
miles.addEventListener('mouseover', function(){
    miles.style.scale = 1.5;
    miles.style.top = 200+"px";
    gwen.style.display="none"
    spiderMan.style.display ="none";
    grupoMorales.style.display = "block";
    fondo.src = "img/fondos//grupo4/Rectangle 12.png"
    lineaArriba.src = "img/fondos//grupo4/linea12Up.png"
    lineaAbajo.src = "img/fondos//grupo4/linea12Down.png"
})
miles.addEventListener('mouseout', function(){
    miles.style.scale = 1;
    miles.style.top = 180+"px";
    grupoMorales.style.display = "none";
    gwen.style.display = "block";
    spiderMan.style.display = "block";
    fondo.src = "img/fondos/rectanguloBlanco2.png"
    lineaArriba.src = ""
    lineaAbajo.src = ""
})
spiderMan.addEventListener('mouseover', function(){
    spiderMan.style.scale = 1.3;
    spiderMan.style.top = 200+"px";
    gwen.style.display="none"
    miles.style.display ="none";
    grupoParker.style.display = "block";
    fondo.src = "img/fondos//grupo4/Rectangle 11.png"
    lineaArriba.src = "img/fondos//grupo4/linea11Up.png"
    lineaAbajo.src = "img/fondos//grupo4/linea11Down.png"
})
spiderMan.addEventListener('mouseout', function(){
    spiderMan.style.scale = 1;
    spiderMan.style.top = 180+"px";
    grupoParker.style.display = "none";
    gwen.style.display = "block";
    miles.style.display = "block";
    fondo.src = "img/fondos/rectanguloBlanco2.png"
    lineaArriba.src = ""
    lineaAbajo.src = ""
})

