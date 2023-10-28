let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//arreglodeespaciosCHATO
let arreglosDeEspacios = []
//arreglo de columnas
let matriz = []
//arreglos de fichas
let fichasJugador1 = [];
let fichasJugador2 = [];
//arreglo de dropZone
let dropZones = []

let cantEnLinea = 3;
let numFilas = 4;
let numColumn = 7;
const TAMESPACIO = 60;
const TAMANIOFICHA = 30;
let alturaTablero = (numFilas*TAMESPACIO);
let largoTablero = (numColumn*TAMESPACIO);
let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
let cantidadFichas = numFilas * numColumn;
//jugadores
let jugador1 = new Jugador("",1);
let jugador2 = new Jugador("",2);

let turno = null;
//imagenes
let imgFichaJugador1 = "../img/4Enlinea/juego/ficha1.png";
let imgFichaJugador2 = "../img/4EnLinea/juego/ficha2.png";
let imgEspacio = "../img/4EnLinea/juego/espacio.png";
let imgFicha1 = "../img/4Enlinea/juego/ficha1.png";
let imgFicha2 = "../img/4EnLinea/juego/ficha2.png";
let imgFicha3 = "../img/4EnLinea/juego/ficha3.png";
let imgFicha4 = "../img/4EnLinea/juego/ficha4.png";
let imgFicha5 = "../img/4EnLinea/juego/ficha5.png";
let imgFicha6 = "../img/4EnLinea/juego/ficha6.png";
let dropimg = "../img/4EnLinea/juego/flecha-abajo.png";





function cargarTablero(){
    cantidadFichas = numFilas * numColumn;
    posicionTableroX = (canvasWidth/2)-(((numColumn)*TAMESPACIO)/2);
    posicionTableroY = (canvasHeight/2)-(((TAMESPACIO)*(numFilas))/2);
    widhtBoard = (numColumn * (TAMESPACIO));
    heightBoard = (numFilas * (TAMESPACIO));

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
            posicionEspacioX+=TAMESPACIO;
            fila.push(rect); 
        }
        matriz.push(fila)
        posicionEspacioY+=TAMESPACIO;
    }
    console.log(matriz)
    //cargo los dropZone
    for(let i = 0; i < numColumn; i++){
        let x = posicionTableroX + (i*TAMESPACIO);
        let y = posicionTableroY - (TAMESPACIO);
        let zona = new EspacioTablero(x,y,TAMESPACIO,ctx);
        dropZones.push(zona);
    }
    //cargarFichas
    for(let i = 0; i < cantidadFichas/2; i++){
        //fichas jugador 1
        let posx = Math.round(Math.random() * (posicionTableroX - TAMESPACIO*2) + TAMESPACIO);
        let posy = canvasHeight - Math.round(Math.random()*alturaTablero) - TAMESPACIO;
        let fichaJugador1 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador1);
        fichasJugador1.push(fichaJugador1);
    
        //fichas jugador 2
        posx = Math.round(Math.random() * ((canvasWidth-TAMESPACIO*2) - (posicionTableroX+widhtBoard+TAMESPACIO)) + (posicionTableroX+widhtBoard+TAMESPACIO));
        posy = canvasHeight - Math.round(Math.random()*alturaTablero) - TAMESPACIO;
        let fichaJugador2 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador2);
        fichasJugador2.push(fichaJugador2);
    }

}
function addEspacio(locationX,locationY){
    let rect = new EspacioTablero(locationX,locationY,TAMESPACIO,ctx);
    arreglosDeEspacios.push(rect);
    return rect;
}

function drawFigures(){
    clearCanvas();
    for(let i = 0; i<arreglosDeEspacios.length; i++){
        arreglosDeEspacios[i].drawImg(imgEspacio);
    }
    for(let i = 0; i<dropZones.length; i++){
        dropZones[i].drawImg(dropimg)
    }
    for(let i = 0;i<fichasJugador1.length;i++){
        fichasJugador1[i].drawImg(imgFichaJugador1);
        fichasJugador2[i].drawImg(imgFichaJugador2);
    }
    ponerNombres();
}
function ponerNombres(){
    let nombre1=document.querySelector("#titulo1");
    let nombre2=document.querySelector("#titulo2");
    nombre1.innerHTML = jugador1.getNombre();
    nombre2.innerHTML = jugador2.getNombre();
}
let cronometro = 0;
function iniciarTiempo(boolean){
    let element = document.getElementById("tiempo");
    let cantminutos = 3;
    let tiempo = cantminutos * 60;
    if(boolean){
        cronometro = setInterval(()=>{
            let minutos = Math.floor(tiempo / 60);
            let segundos = tiempo % 60;
            segundos = segundos < 10 ? '0' + segundos : segundos;
            element.innerHTML = `${minutos}:${segundos}`;
            if(minutos == 0 && segundos == 0){
                clearInterval();
                finishGame();

            }
            else{
                tiempo--;
            }
        }, 1000);
    }
    else{
        clearInterval(cronometro);
    }
}
let ganador = document.querySelector("#ganador");
function finalizarJuego(){
    iniciarTiempo(false);
    titulo.style.display ="none";
    ganador.style.display = "block";
    ganador.innerHTML = `Gano `+ turno.getNombre();
    for(let i = 0; i < fichasJugador1.length; i++){
        fichasJugador1[i].ponerEnTablero(false);
        fichasJugador2[i].ponerEnTablero(false);
    }
}
function reiniciarJuego(){
    arreglosDeEspacios = [];
    matriz = [];
    fichasJugador1 = [];
    fichasJugador2 = [];
    turno = null;
    cambiarTurno()
    clearCanvas();
    cargarTablero();
    drawFigures();
    iniciarTiempo(false);
    iniciarTiempo(true);
}
function clearCanvas(){
    ctx.clearRect(0, 0,canvasWidth,canvasHeight);
}
//reiniciar Juego
document.querySelector('#restartGame').addEventListener('click',()=>{
    reiniciarJuego();
})
//nombre de los jugadores
document.querySelector('#namePlayer1').addEventListener('keyup', ()=>{
    jugador1.setNombre(document.querySelector('#namePlayer1').value);
});
document.querySelector('#namePlayer2').addEventListener('keyup', ()=>{
    jugador2.setNombre(document.querySelector('#namePlayer2').value);
});

//juegar 4 en linea
document.querySelector('#play-canvas').addEventListener('click',()=>{
    document.querySelector('.section-image').style.display="none";
    document.querySelector('.canvas-form').style.display="flex";
})
document.querySelector("#play-game").addEventListener('click',()=>{
    document.querySelector('.canvas').style.display="flex";
    document.querySelector('.canvas-form').style.display="none";
    drawFigures();
    iniciarTiempo(true);
    cambiarTurno();
})
//fichas
document.querySelector("#ficha1").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha1)
        imgFichaJugador1 = imgFicha1;
    }
})
document.querySelector("#ficha2").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha2)
        imgFichaJugador2 = imgFicha2;
    }
})
document.querySelector("#ficha3").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha3)
        imgFichaJugador1 = imgFicha3;
    }
    
})
document.querySelector("#ficha4").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha4)
        imgFichaJugador2 = imgFicha4;
    }
    
})
document.querySelector("#ficha5").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha5)
        imgFichaJugador1 = imgFicha5;
    }
    
})
document.querySelector("#ficha6").addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha6)
        imgFichaJugador2 = imgFicha6;
    }
    
})
cargarTablero();
drawFigures();
//let fichita = new Ficha(40)
let fichaActual=null;
canvas.addEventListener("mousedown", (event) => {
    let mouseX = event.layerX;
    let mouseY = event.layerY;
    if(turno.getId()==1){
        for(let i = 0; i<fichasJugador1.length; i++){
            let ficha = fichasJugador1[i];
            if(ficha.isClicked(mouseX,mouseY)){
                fichaActual = ficha;
                break;
            }
        }
    }
    if(turno.getId() == 2){
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
    if(fichaActual!=null){
        let x = fichaActual.getX();
        let y = fichaActual.getY();
        //recorro todos los dropzone
        for(let i =0;i<dropZones.length;i++){
            //si la ficha esta arriba de alguno
            if(dropZones[i].detectarFicha(x,y)){
                insertarFicha(i);
                cambiarTurno();
                fichaActual = null;
            }
        }
        if(fichaActual != null){
            fichaActual.posInicial();
            fichaActual = null;
            drawFigures()
        }
    
    }
})
canvas.addEventListener("mouseleave", ()=>{
    if(fichaActual!=null){
        fichaActual.posInicial();
        fichaActual = null;
        drawFigures();
    }
})
titulo = document.querySelector("#turno");
function cambiarTurno(){
    if(turno == null){
        ganador.style.display = "none";
        titulo.innerHTML = `Turno de `+jugador1.getNombre();
        turno = jugador1;
        titulo.style.display="block";
        titulo.style.color="#791111";
    }
    else if(turno.getId() == 1){
        turno = jugador2;
        titulo.innerHTML = `Turno de `+jugador2.getNombre();
        titulo.style.color="#296CD1";
    }
    else{
        titulo.innerHTML = `Turno de `+jugador1.getNombre();
        turno = jugador1;
        titulo.style.color="#791111";
    }
}
function insertarFicha(columna){
    for(let i = matriz.length-1; i >=  0; i--){
        let fila = matriz[i];
        if(!fila[columna].estaOcupada()){
            fila[columna].setFicha(fichaActual);
            let x = (fila[columna].getX() +TAMESPACIO/1.8);
            let y = fila[columna].getY() + TAMESPACIO/1.7;
            fichaActual.move(x,y);
            fichaActual.ponerEnTablero(false);
            drawFigures();
            checkGanador(i,columna);
            break;
        }
        if(i == 0){
            fichaActual.posInicial();
            drawFigures()
        }
    }
}
function checkGanador(fila,columna){
    if(checkDiagonales(fila,columna)){

    }
    if(checkDiagonales(fila,columna) || checkFila(fila,columna) || checkColumna(fila,columna)){
        finalizarJuego();
        
    }
}
/*function verifyWinner(modo){
    if(tablero.thereIsWinner(modo)){
        
        let img = new Image();
        let x = canvas.width / 2 - 170
        img.src = "img/thanos.jpg"
        ctx.drawImage(img, 0, 0,1200,600);
        ctx.font = '48px serif';
        ctx.fillStyle = "#FFFFFF";
        //ctx.textAlign("center");
        if(jugador == j1){
            ctx.fillText('Ganó el Jugador 1', x, 50);
        }else{
            ctx.fillText('Ganó el Jugador 2', x, 50);
        }
    }
}*/
function checkDiagonales(fila,columna){
    let suma = 0;
    let izqAbajo = checkDiagAbajIzq(suma,fila,columna);
    let izqArriba = checkDiagArribIzq(suma,fila,columna);
    let derAbajo = checkDiagAbajDer(suma,fila,columna);
    let derArriba = checkDiagArribDer(suma,fila,columna);
    if((izqAbajo + derArriba >= cantEnLinea) || (izqArriba+derAbajo >=cantEnLinea)){
        return true;
    }
    else{
        return false;
    }
}
let arreglo = [];
function checkColumna(fila,columna){
    let suma = 0;
    let abajo =  checkAbajo(suma,fila,columna);
    if(abajo >= cantEnLinea){
        return true;
    }
    else{
        return false;
    }
}
function checkFila(fila,columna){
    let suma = 0;
    let derecha = checkDerecha(suma,fila,columna);
    let izquierda = checkIzquierda(suma,fila,columna);
    if(derecha + izquierda >= cantEnLinea){
        return true;
    }
    else{
        return false;
    }
}
function checkAbajo(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(arreglo.length!=0){
                arreglo.push(espacio);
            }
            if(suma == cantEnLinea){
                arreglo.push(espacio);
            }
            if(fila<numFilas-1){
                suma = checkAbajo(suma,fila+1,columna)
            }
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkDerecha(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(columna<numColumn-1){
                suma = checkDerecha(suma,fila,columna+1)
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkIzquierda(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno){
            suma++
            if(columna>0){
                suma=checkIzquierda(suma,fila,columna-1)
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkDiagArribIzq(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(columna>0 && fila>0){
                suma = checkDiagArribIzq(suma,fila-1,columna-1);
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkDiagArribDer(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(columna<numColumn-1 && fila>0){
                suma = checkDiagArribDer(suma,fila-1,columna+1);
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkDiagAbajIzq(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(columna>0 && fila<numFilas-1){
                suma = checkDiagAbajIzq(suma,fila+1,columna-1);
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}
function checkDiagAbajDer(suma,fila,columna){
    let filaMatriz = matriz[fila]
    let espacio = filaMatriz[columna]
    let tipoFicha = espacio.getTipoDeFicha();
    if(tipoFicha!=null){
        if(tipoFicha == turno.getId()){
            suma++
            if(columna<numColumn-1 && fila<numFilas-1){
                suma = checkDiagAbajDer(suma,fila+1,columna+1);
            } 
        }
    }
    if(suma<=1){
        return 0;
    }
    else{
        return suma;
    }
}

