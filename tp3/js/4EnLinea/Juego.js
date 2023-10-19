let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//arreglodeespaciosCHATO
let arreglosDeEspacios = []
//arreglo de columnas
let matriz = []
//arreglos de fichas
let fichasJugador1 = [];
let fichasJugador2 = [];

let numFilas = 6;
let numColumn = 7;
const SIZEPOSBOARD = 40;
const TAMANIOFICHA = 20;
let alturaTablero = (numFilas*SIZEPOSBOARD);
let largoTablero = (numColumn*SIZEPOSBOARD);
let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
let cantidadFichas = numFilas * numColumn;
//jugadores
let jugador1 = new Jugador();
let jugador2 = new Jugador();
//imagenes
let imgEspacio = "../img/4EnLinea/juego/espacio.png";
let imgFicha1 = "../img/4EnLinea/juego/ficha1.png";
let imgFicha2 = "../img/4EnLinea/juego/ficha2.png";


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
        //a cada le cargo un arreglo de columna
        let columna=[];
        //recorrolasColumnas
        for(let j=0;j<numColumn;j++){
            if(j==0){
                posicionEspacioX = posicionTableroX;
            }
            let rect = addEspacio(posicionEspacioX,posicionEspacioY);
            posicionEspacioX+=SIZEPOSBOARD;
            columna.push(rect);
        }
        posicionEspacioY+=SIZEPOSBOARD;
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
        fichasJugador2[i].drawImg(imgFicha2);
    }
}
function clearCanvas(){
    ctx.clearRect(0,0,canvasHeight,canvasWidth);
}
//juegar 4 en linea
document.querySelector('#play-canvas').addEventListener('click',()=>{
    document.querySelector('.canvas').style.display="flex";
    document.querySelector('.section-image').style.display="none";
})

cargarTablero();
drawFigures();
let fichita = new Ficha(40)

