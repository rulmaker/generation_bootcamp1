class Pokemon{
    //atributos
    #nombre = '';
    #edad = 0;
    #evolucion = '';
    

    constructor(nombre, edad, evolucion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
    }

    get nombre(){
        return this.#nombre;
    }

    atacar(){
        return console.log(`${this.#nombre}, está atacando`);
    }

    evolucionar(){
        let mensaje = ''
        
        if(this.#evolucion === ''){
            mensaje = 'No puedo evolucionar';
            console.log(mensaje) 
        }else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
            this.#nombre = this.#evolucion;
            console.log(mensaje);
        }     
    }
}

/* const charmander = new Pokemon('Charmander', 2, 'Charmeleon', 'Fuego');
const bulbasaur = new Pokemon('Bulbasaur', 1, 'Ivisaur', 'Planta');

console.log(charmander);
console.log(bulbasaur);

charmander.atacar();
bulbasaur.atacar();
charmander.evolucionar();

console.log(charmander); */

//clase hija
class TipoFuego extends Pokemon{
    //atributos
    #tipo = '';
    constructor(nombre, edad, evolucion){
        super(nombre, edad, evolucion);
        this.#tipo = 'Fuego';
    }

    atacar(){
        return console.log(`${super.nombre}, está lanzando un ataque de tipo ${this.#tipo}`);
    }
}

let nombre = 'Charmander';

const charmander = new TipoFuego(nombre, 2, 'Charmeleon');
console.log(charmander);

charmander.atacar();
//charmander.evolucionar();
