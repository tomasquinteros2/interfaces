class Ficha{
    constructor(x,y,radio,ctx,jugador){
        this.puedeMoverse=true;
        this.seleccionada=false;
        this.x=x;
        this.y=y;
        this.radio=radio;
        this.ctx=ctx;
        this.jugador=jugador;
        this.imagen= new Image();
        this.xInicial;
        this.yInicial;
    }
    drawImg(img){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radio,0,2*Math.PI);
        if(this.imagen.src ===""){
            this.imagen.src= img;
            let loadImg = function(){
                this.ctx.drawImage(this.imagen, this.x - this.radio,this.y - this.radio,this.radio/.6,this.radio/.6);
            }
            this.imagen.onload = loadImg.bind(this);
        }
        else{
            this.ctx.drawImage(this.imagen, this.x - this.radio,this.y - this.radio,this.radio/.6,this.radio/.6);
        }
    }
    isClicked(posx,posy){
        if(this.puedeMoverse){
            let _x = this.x - posx;
            let _y = this.y - posy;
            let dist = Math.sqrt(_x * _x + _y * _y);
            if(dist > this.radio){
                return false;
            }else{
                this.xInicial = this.x;
                this.yInicial = this.y;
                return true;
            }
        }else{
            return false;
        }
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    getY(){
        return this.y;
    }
    getX(){
        return this.x;
    }
    ponerEnTablero(boolean){
        this.puedeMoverse = boolean;
    }
    posInicial(){
        this.move(this.xInicial,this.yInicial)
        console.log("movida")
    }
    getJugador(){
        return this.jugador.getId();
    }
}