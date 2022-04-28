//escribe un ciclo anidado que imprima el siguiente patrón.

/*

*  
* *  
* * *  
* * * *  
* * * * * 

*/

/* for(let i=1; i<=5; i++){      //1  //2
    for(let j=1; j<=i; j++){  //5  //5
        document.write('*');
        //console.log('ciclo hijo\n');
    }

    document.write('<br>');  
} */


/* let numIn = new Number(prompt("Ingrese un número"));

for (numIn ; numIn>0 ; numIn--) {
    document.write("<hr>" + numIn + "<hr>");
    for (let i = 0; i<=numIn; i++) {
        let arrayIn = new Array();
        arrayIn.push(i);
        document.write(arrayIn + "<br>");
    }
} */

/* let n = 5;
let arr = [];
let suma = 0;

for(let i = 1; i <=n ; i++){
    arr.unshift(i);
    suma += i;
}
console.log(arr);
console.log(suma); */