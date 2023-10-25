let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//arreglodeespaciosCHATO
let arreglosDeEspacios = []
//arreglo de columnas
let matriz = []
//arreglo de dropZone
let dropZone = []
//arreglos de fichas
let fichasJugador1 = [];
let fichasJugador2 = [];


let numFilas = 6;
let numColumn = 7;
const SIZEPOSBOARD = 60;
const TAMANIOFICHA = 30;
let alturaTablero = (numFilas*SIZEPOSBOARD);
let largoTablero = (numColumn*SIZEPOSBOARD);
let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
let cantidadFichas = numFilas * numColumn;
//jugadores
let jugador1 = new Jugador();
let jugador2 = new Jugador();

let turno = 2;
//imagenes
let imgEspacio = "../img/4EnLinea/juego/espacio.png";
let imgFicha1 = "../img/4EnLinea/juego/ficha1.png";
let imgFicha2 = "../img/4EnLinea/juego/ficha2.png";
let dropimg = "../img/4EnLinea/juego/dropzone.png";


function cargarTablero(){
    cantidadFichas = numFilas * numColumn;
    posicionTableroX = (canvasWidth/2)-(((numColumn)*SIZEPOSBOARD)/2);
    posicionTableroY = (canvasHeight/2)-(((SIZEPOSBOARD)*(numFilas))/2);
    widhtBoard = (numColumn * (SIZEPOSBOARD));
    heightBoard = (numFilas * (SIZEPOSBOARD));

    fichasJugadas = 0;
    let posicionEspacioX = posicionTableroX;
    let posicionEspacioY = posicionTableroY;   
    //recorro todas las filas

    for(let i=0;i<numFilas;i++){
        //a cada i le cargo un arreglo que es una fila
        let fila=[];
        //recorrolasColumnas
        for(let j=0;j<numColumn;j++){
            if(j==0){
                posicionEspacioX = posicionTableroX;
            }
            let rect = addEspacio(posicionEspacioX,posicionEspacioY);
            posicionEspacioX+=SIZEPOSBOARD;
            fila.push(rect); 
        }
        matriz.push(fila)
        posicionEspacioY+=SIZEPOSBOARD;
    }
    console.log(matriz)
    for(let i = 0; i < numColumn; i++){
        let x = posicionTableroX + (i*SIZEPOSBOARD);
        let y = posicionTableroY - SIZEPOSBOARD;
        let zona = new EspacioTablero(x,y,SIZEPOSBOARD,ctx);
        dropZone.push(zona);
    }
    //cargarFichas
    for(let i = 0; i < cantidadFichas/2; i++){
        //fichas jugador 1
        let posx = Math.round(Math.random() * (posicionTableroX - SIZEPOSBOARD*2) + SIZEPOSBOARD);
        let posy = canvasHeight - Math.round(Math.random()*alturaTablero) - SIZEPOSBOARD;
        let fichaJugador1 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador1);
        fichasJugador1.push(fichaJugador1);
    
        //fichas jugador 2
        posx = Math.round(Math.random() * ((canvasWidth-SIZEPOSBOARD*2) - (posicionTableroX+widhtBoard+SIZEPOSBOARD)) + (posicionTableroX+widhtBoard+SIZEPOSBOARD));
        posy = canvasHeight - Math.round(Math.random()*alturaTablero) - SIZEPOSBOARD;
        let fichaJugador2 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador2);
        fichasJugador2.push(fichaJugador2);
    }

}
function addEspacio(locationX,locationY){
    let rect = new EspacioTablero(locationX,locationY,SIZEPOSBOARD,ctx);
    arreglosDeEspacios.push(rect);
    return rect;
}

function drawFigures(){
    clearCanvas();
    for(let i = 0; i<arreglosDeEspacios.length; i++){
        arreglosDeEspacios[i].drawImg(imgEspacio);
    }
    for(let i = 0;i<fichasJugador1.length;i++){
        fichasJugador1[i].drawImg(imgFicha1);
    }
    for(let i = 0;i<fichasJugador1.length;i++){
        fichasJugador2[i].drawImg(imgFicha2);
    }
    for(let i = 0; i<dropZone.length; i++){
        dropZone[i].drawImg(dropimg)
    }
}
function clearCanvas(){
    ctx.clearRect(0, 0,canvasWidth,canvasHeight);
}

//juegar 4 en linea
document.querySelector('#play-canvas').addEventListener('click',()=>{
    document.querySelector('.canvas').style.display="flex";
    document.querySelector('.section-image').style.display="none";
})
cargarTablero();
drawFigures();
//let fichita = new Ficha(40)
let fichaActual=null;
canvas.addEventListener("mousedown", (event) => {
    console.log("mousedown")
    console.log(fichaActual)
    let mouseX = event.layerX;
    let mouseY = event.layerY;
    if(turno==1){
        for(let i = 0; i<fichasJugador1.length; i++){
            let ficha = fichasJugador1[i];
            if(ficha.isClicked(mouseX,mouseY)){
                fichaActual = ficha;
                break;
            }
        }
    }
    else{
        for(let i = 0; i<fichasJugador2.length; i++){
            let ficha = fichasJugador2[i];
            if(ficha.isClicked(mouseX,mouseY)){
                fichaActual = ficha;
                break;
            }
        }
    }
})

canvas.addEventListener("mousemove", (event) => {
    if(fichaActual!=null){
        fichaActual.move(event.layerX,event.layerY);
        drawFigures();
    }
})
canvas.addEventListener("mouseup", () =>{
    console.log("mouseup")
    //let ficha = fichaActual;
    //ficha.posInicial();
    fichaActual = null;
})
/*canvas.addEventListener("mouseleave", ()=>{
    console.log("mouseleave")
    fichaActual.posInicial();
    fichaActual = null;
})*/
/*document.addEventListener("DOMContentLoaded", function (){
    canvas.onmousedown = function(event){
        console.log("yeah")
        if(turno==jugador1){
            for(let i = 0; i<fichasJugador1.length; i++){
                let ficha = fichasJugador1[i];
                if(ficha.isClicked(event.clientX,event.clientY)){
                    fichaActual = ficha;
                    break;
                }
            }
        }
        console.log(fichaActual);
    }
    canvas.onmousemove = function(event){
        if(fichaActual !=null){
            fichaActual.move(event.clientX,event.clientY);
            drawFigures()        
        }
    }
})*/
