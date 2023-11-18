'use strict'

let gwen = document.getElementById('gwen');
let miles = document.getElementById('miles-morales');
let spiderMan = document.getElementById('spider-man');

let containerSpiders= document.getElementById("containerGp8");
let layer = document.getElementById("layerGp8");
let fondo= document.getElementById("fondogp8");

gwen.addEventListener('mouseover', function(){
    container.style.borderTop= "10px solid #C92B94";
    container.style.borderBottom= "10px solid #C92B94";
    layer.style.backgroundColor= "rgba(255, 0, 167, 0.2)";
    fondo.style.opacity="0";
    gwen.style.scale="1.5";
    spiderMan.style.scale="0.5";
    miles.style.scale="0.5";
});
gwen.addEventListener('mouseout', function(){
    container.style.borderTop= "none";
    container.style.borderBottom= "none";
    layer.style.backgroundColor= "transparent";
    fondo.style.opacity="1";
    gwen.style.scale="1";
    spiderMan.style.scale="1";
    miles.style.scale="1";
});
miles.addEventListener('mouseover', function(){
    container.style.borderTop= "10px solid #304C71";
    container.style.borderBottom= "10px solid #304C71";
    layer.style.backgroundColor= "rgba(48, 76, 113, 0.2)";
    fondo.style.opacity="0";
    miles.style.scale="1.5";
    gwen.style.scale="0.5";
    spiderMan.style.scale="0.5";

});
miles.addEventListener('mouseout', function(){
    container.style.borderTop= "none";
    container.style.borderBottom= "none";
    layer.style.backgroundColor= "transparent";
    fondo.style.opacity="1";
    miles.style.scale="1";
    gwen.style.scale="1";
    spiderMan.style.scale="1";

});
spiderMan.addEventListener('mouseover', function(){
    container.style.borderTop= "10px solid #2552C8";
    container.style.borderBottom= "10px solid #2552C8";
    layer.style.backgroundColor= "rgba(37, 82, 200, 0.2)";
    spiderMan.style.scale="1.5";
    gwen.style.scale="0.5";
    miles.style.scale="0.5";
});
spiderMan.addEventListener('mouseout', function(){
    container.style.borderTop= "none";
    container.style.borderBottom= "none";
    layer.style.backgroundColor= "transparent";
    spiderMan.style.scale="1";
    gwen.style.scale="1";
    miles.style.scale="1";
});

