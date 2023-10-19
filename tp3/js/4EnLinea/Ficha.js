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
            this.ctx.drawImage(this.imagen, this.x - this.radio,this.y - this.radio,this.this.radio/.6,this.this.radio/.6);
        }
    }
}