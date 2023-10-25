class EspacioTablero {

    constructor(x,y,width,ctx){
        this.x=x;
        this.y=y;
        this.width=width;
        this.ctx=ctx;
        this.image = new Image();
        this.ficha=null;
    }
    getY(){
        return this.y;
    }
    getX(){
        return this.x;
    }
    setFicha(ficha){
        this.ficha=ficha;
    }
    getFicha(){
        return this.ficha;
    }
    drawImg(img){
        if(this.image.src ===""){
            this.image.src= img;
            let loadImg = function(){
                this.ctx.drawImage(this.image, this.x,this.y,this.width,this.width);
            }
            this.image.onload = loadImg.bind(this);
        }
        else{
            this.ctx.drawImage(this.image, this.x,this.y,this.width,this.width)
        }
    }
    detectarFicha(posX,posY){
        if((posX > this.x && posX <= (this.x + this.width)) && (posY > this.y && posY < (this.y+this.width))){
            return true;
        }
        else{
            return false;
        }
    }
    estaOcupada(){
        if(this.ficha == null){
            return false;
        }
        else{
            return true;
        }
    }
}