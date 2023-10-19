class EspacioTablero {

    constructor(x,y,width,ctx){
        this.x=x;
        this.y=y;
        this.width=width;
        this.ctx=ctx;
        this.image = new Image();
        this.ficha=null;
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
}