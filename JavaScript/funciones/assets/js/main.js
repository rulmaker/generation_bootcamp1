

/* Funciones, nos permiten reutilizar código */

function saludar(nombre = "panchito", apellido = ""){
    
    //string normal
    //console.log('Hola mi nombre es:', nombre, apellido);//pedro
    //template Strings || Plantillas literales
    //console.log(`Hola mi nombre es:${nombre?"Raul":"Desconocido"}`);
    return `Mi nombre es ${nombre} ${apellido}`;
}

saludar("Pedro", "Pérez");//la invocación o llamada de la función

let funcionSaludar = saludar('Felipe', 'Maqueda');
//console.log(funcionSaludar);


//console.log(saludar('Alberto', 'Hernández').toUpperCase());


/* document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`); *///plantilla literal

/* 
if(){
    codigo
}else{
    otro codigo
}

*/


//console.log(funcionSaludar.toLowerCase());


/*Funcion declarada  */

function suma(a,b){
    return a + b;
}

console.log(suma(10,20));

/* hoisting

 */



/* Funciones expresadas | función expresión */


const resta = function(a, b){
    return a - b;
}

console.log(resta(30, 10));


/* setTimeout(()=>{

}, 3000); */

//funcion flecha
const multiplicacion = (a,b) => a * b;


console.log(multiplicacion(40, 5));
