class Jugador{
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }
    getId(){
        return this.id
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getNombre(){
        return this.nombre;
    }
}