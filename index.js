
// Primera parte:
function sumar(a, b, c){
    return a + b + c;
}
console.log(sumar(1,2,3));

//Segunda parte:

class Coche {
    constructor( ){
     this.numeroDePuertas = 4;
        
    }
     incrementarNumerodePuertas(a){
       let puertas = this.numeroDePuertas+a;
       return puertas;
    }
}

let miCoche = new Coche();

let nuevoCoche = miCoche.incrementarNumerodePuertas(1);

alert(`el nuevo coche tiene ${nuevoCoche} puertas`);