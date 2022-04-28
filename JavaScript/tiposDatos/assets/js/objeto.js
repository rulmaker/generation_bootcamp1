const nombre = "Jonathan";
const nombre2 = new String('Yair');

console.log(nombre);
console.log(nombre2);

const persona = new Object();
persona.nombre = 'Raul';
persona.apellido = 'Sanchez';
persona.edad = 23;

console.log(persona);

const nuevaPersona = {
    nombre: {
        nombre: 'Sonia',
        apellido: 'Martínez'
    },
    edad: 24,
    pasatiempos: ['Estudiar', 'Dormir'],
    saludar: function(){
        console.log(`Hola mi nombre es ${this.nombre.nombre}`);
    }
}

console.log(nuevaPersona);
nuevaPersona.saludar();