class Jugador{
    constructor(nombre,id){
        this.id = id;
        this.nombre = "jugador "+id;
    }
    getId(){
        return this.id
    }
    setNombre(nombre){
        this.nombre=nombre;
        console.log("entro2")
    }
    getNombre(){
        return this.nombre;
    }
}