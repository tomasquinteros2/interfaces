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

let cantEnLinea = 4;
let numFilas = 6;
let numColumn = 7;
let TAMESPACIO = 60;
let TAMANIOFICHA = 30;
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
let imgFichaJugador2 = "../img/4Enlinea/juego/ficha2.png";
let imgEspacio = "../img/4Enlinea/juego/espacio.png";
let imgFicha1 = "../img/4Enlinea/juego/ficha1.png";
let imgFicha2 = "../img/4Enlinea/juego/ficha2.png";
let imgFicha3 = "../img/4Enlinea/juego/ficha3.png";
let imgFicha4 = "../img/4Enlinea/juego/ficha4.png";
let imgFicha5 = "../img/4Enlinea/juego/ficha5.png";
let imgFicha6 = "../img/4Enlinea/juego/ficha6.png";
let dropimg = "../img/4Enlinea/juego/flecha-abajo.png";
let fondo = "../img/4Enlinea/juego/fondo6.png";
//fondo
let imgFondo= new Image();
imgFondo.src = fondo;



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
    let posx1 = (posicionTableroX - TAMESPACIO*2);
    let posx2 = (posicionTableroX+largoTablero) +TAMESPACIO*2
    let posYregresiva = canvasHeight - alturaTablero/2;
    for(let i = 0; i < cantidadFichas/2; i++){
        //fichas jugador 1
        if(posYregresiva<TAMESPACIO*2){
            posYregresiva = canvasHeight - alturaTablero/2;
            posx1 = (posicionTableroX - TAMESPACIO*3);
            posx2 = (posicionTableroX+largoTablero) +TAMESPACIO*3
        }
        let fichaJugador1 = new Ficha(posx1, posYregresiva, TAMANIOFICHA, ctx, jugador1);
        fichasJugador1.push(fichaJugador1);
        //fichas jugador 2
        let fichaJugador2 = new Ficha(posx2, posYregresiva, TAMANIOFICHA, ctx, jugador2);
        fichasJugador2.push(fichaJugador2);
        posYregresiva -= 10;
        /*
        let posx = Math.round(Math.random() * (posicionTableroX - TAMESPACIO*2) + TAMESPACIO);
        let posy = canvasHeight - Math.round(Math.random()*alturaTablero) - TAMESPACIO;
        let fichaJugador1 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador1);
        fichasJugador1.push(fichaJugador1);
    
        //fichas jugador 2
        posx = Math.round(Math.random() * ((canvasWidth-TAMESPACIO*2) - (posicionTableroX+widhtBoard+TAMESPACIO)) + (posicionTableroX+widhtBoard+TAMESPACIO));
        posy = canvasHeight - Math.round(Math.random()*alturaTablero) - TAMESPACIO;
        let fichaJugador2 = new Ficha(posx, posy, TAMANIOFICHA, ctx, jugador2);
        fichasJugador2.push(fichaJugador2);*/
    }
    posYregresiva = canvasHeight - alturaTablero/2;

}
function addEspacio(locationX,locationY){
    let rect = new EspacioTablero(locationX,locationY,TAMESPACIO,ctx);
    arreglosDeEspacios.push(rect);
    return rect;
}
function drawFigures(){
    clearCanvas();
    ctx.drawImage(imgFondo,0,0,canvasWidth,canvasHeight)
    //ctx.fillRect(0, 0,canvasWidth,canvasHeight);
    for(let i = 0; i<dropZones.length; i++){
        dropZones[i].drawImg(dropimg)
    }
    for(let i = 0;i<fichasJugador1.length;i++){
        fichasJugador1[i].drawImg(imgFichaJugador1);
        fichasJugador2[i].drawImg(imgFichaJugador2);
    }
    for(let i = 0; i<arreglosDeEspacios.length; i++){
        arreglosDeEspacios[i].drawImg(imgEspacio);
    }


    ponerNombres();
}
function ponerNombres(){
    let nombre1=document.querySelector("#titulo1");
    let nombre2=document.querySelector("#titulo2");
    if(nombre1 == ''){
        nombre1 = "jugador1";
    }
    else if(nombre2 == ''){
        nombre2 = "jugador2";
    }
    else{
        nombre1.innerHTML = jugador1.getNombre();
        nombre2.innerHTML = jugador2.getNombre();
    }

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
                finalizarJuego();

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
    dropZones= [];
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
//menu
document.querySelector('#menuGame').addEventListener('click',()=>{
    document.querySelector('.canvas-form').style.display="flex";
    document.querySelector('.canvas').style.display="none";
})
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
function seleccionarFichaJugador2(ficha){
    ficha2.style.scale = "1.0"
    ficha4.style.scale = "1.0"
    ficha6.style.scale = "1.0"
    ficha.style.scale = "1.2"
}
function seleccionarFichaJugador1(ficha){
    ficha1.style.scale = "1.0"
    ficha3.style.scale = "1.0"
    ficha5.style.scale = "1.0"
    ficha.style.scale = "1.2"
}
ficha1 = document.querySelector("#ficha1");
ficha2 = document.querySelector("#ficha2");
ficha3 = document.querySelector("#ficha3");
ficha4 = document.querySelector("#ficha4");
ficha5 = document.querySelector("#ficha5");
ficha6 = document.querySelector("#ficha6");
ficha1.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha1)
        imgFichaJugador1 = imgFicha1;
    }
    seleccionarFichaJugador1(ficha1);
})
ficha2.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha2)
        imgFichaJugador2 = imgFicha2;
    }
    seleccionarFichaJugador2(ficha2);
})
ficha3.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha3)
        imgFichaJugador1 = imgFicha3;
    }
    seleccionarFichaJugador1(ficha3);
})
ficha4.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha4)
        imgFichaJugador2 = imgFicha4;
    }
    seleccionarFichaJugador2(ficha4);
})
ficha5.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador1.length;i++){
        fichasJugador1[i].setImagen(imgFicha5)
        imgFichaJugador1 = imgFicha5;
    }
    seleccionarFichaJugador1(ficha5);
})
ficha6.addEventListener('click',()=>{
    for(let i = 0; i < fichasJugador2.length;i++){
        fichasJugador2[i].setImagen(imgFicha6)
        imgFichaJugador2 = imgFicha6;
    }
    seleccionarFichaJugador2(ficha6);
})
//cambiar cantidad en linea
document.querySelector("#linea4").addEventListener('click',()=>{
    cantEnLinea = 4;
    numColumn = 7;
    numFilas = 6;
    TAMESPACIO = 60;
    TAMANIOFICHA = 30;
    reiniciarJuego();
})
document.querySelector('#linea5').addEventListener('click',()=>{
    cantEnLinea = 5;
    numColumn = 8;
    numFilas = 7;
    TAMESPACIO = 50;
    TAMANIOFICHA = 25;
    reiniciarJuego();
})
document.querySelector('#linea6').addEventListener('click',()=>{
    cantEnLinea = 6;
    numColumn = 9;
    numFilas = 8;
    TAMESPACIO = 45;
    TAMANIOFICHA = 22;
    reiniciarJuego();
})
document.querySelector('#linea7').addEventListener('click',()=>{
    cantEnLinea = 7;
    numColumn = 10;
    numFilas = 9;
    TAMESPACIO = 40;
    TAMANIOFICHA = 20;
    reiniciarJuego();
})
cargarTablero();
drawFigures();
//let fichita = new Ficha(40)
let fichaActual=null;
canvas.addEventListener("mousedown", (event) => {
    let mouseX = event.layerX;
    let mouseY = event.layerY;
    if(turno.getId()==1){
        for(let i = fichasJugador1.length-1; i>=0; i--){
            let ficha = fichasJugador1[i];
            if(ficha.isClicked(mouseX,mouseY)){
                fichaActual = ficha;
                break;
            }
        }
    }
    if(turno.getId() == 2){
        for(let i = fichasJugador2.length-1; i>=0; i--){
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
let pos = 0
let intervalo=0;
let fichaAnimada = null;
function insertarFicha(columna){
    for(let i = matriz.length-1; i >=  0; i--){
        let fila = matriz[i];
        if(!fila[columna].estaOcupada()){
            fila[columna].setFicha(fichaActual);
            let x = (fila[columna].getX() +TAMESPACIO/1.8);
            let y = fila[columna].getY() + TAMESPACIO/1.7;
            //moverFicha(x,y);
            fichaAnimada = fichaActual;
            pos=0;
            fichaActual.ponerEnTablero(false);
            mover(x,y);
            drawFigures();
            checkGanador(i,columna);
            break;
        }
        else if(i == 0){
            fichaActual.posInicial();
            drawFigures()
            cambiarTurno()
        }    
        }
       

}
function mover(x,y){
    intervalo = setInterval(() => {
        pos += 1;
        fichaAnimada.move(x,fichaAnimada.getY()+pos);
        drawFigures()
        if(fichaAnimada.getY()>y){
            fichaAnimada.move(x+1,y);
            clearInterval(intervalo);
            if(fichaAnimada.getY()==y && fichaAnimada.getX()==x+1){
                revotarFicha(x,y);
            }
            drawFigures()
        }
    },10)

}
function revotarFicha(x,y){
    let posicion = 0;
    intervalo2 = setInterval(() => {
        if(fichaAnimada.getY()>(y-TAMESPACIO/3)){
            posicion -=0.5;
            fichaAnimada.move(x,(fichaAnimada.getY()+posicion));
            drawFigures()
        }
        else{
            clearInterval(intervalo2);
            drawFigures()
            bajarFicha(x,y);
        }
    },10)
}
function bajarFicha(x,y){
    pos = 0;
    intervalo = setInterval(() => {
        pos += 0.25;
        fichaAnimada.move(x,fichaAnimada.getY()+pos);
        drawFigures()
        if(fichaAnimada.getY()>y){
            fichaAnimada.move(x+1,y);
            clearInterval(intervalo);
            drawFigures()
        }
    },20)
}
function checkGanador(fila,columna){
    console.log(checkDiagonales(fila,columna),checkFila(fila,columna),checkColumna(fila,columna));
    if(checkDiagonales(fila,columna) || checkFila(fila,columna) || checkColumna(fila,columna)){
        finalizarJuego();
    }
}
function checkDiagonales(fila,columna){
    let suma = 0;
    let izqAbajo = checkDiagAbajIzq(suma,fila,columna);
    let izqArriba = checkDiagArribIzq(suma,fila,columna);
    let derAbajo = checkDiagAbajDer(suma,fila,columna);
    let derArriba = checkDiagArribDer(suma,fila,columna);
    if(izqAbajo == 0 || derArriba == 0){
        if((izqAbajo + derArriba) >= cantEnLinea){
            return true;
        }
    }
    if(derAbajo == 0 || izqArriba== 0){
        if((izqArriba+derAbajo) >=cantEnLinea){
            return true;
        }
    }
    if((((izqAbajo + derArriba)-1) >= cantEnLinea) || (((izqArriba+derAbajo)-1) >=cantEnLinea)){
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
    if(derecha == 0 || izquierda==0){
        if((derecha + izquierda) >= cantEnLinea){
            return true;
        }
    }
    if(((derecha + izquierda)-1) >= cantEnLinea){
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
        if(tipoFicha == turno.getId()){
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

