/* este es un nodo de comentario */
const $titulo = document.querySelector('h1');
const $parr = document.querySelector('p');



//nodeName
console.log($parr.nodeName);
console.log($titulo.nodeName);

//textContent
$parr.textContent += "Hola Mundo!";
console.log($parr.textContent);

$titulo.textContent = 'Modificando elementos con JavaScript'

//innerText - mejor no usarla

//innerHTML

console.log($parr.innerHTML);

$parr.innerHTML = '<a href="#">Este es un enlace</a>';
//reemplaza lo que hay adentro del elemento seleccionado


//outerHTML
//$parr.outerHTML = '<a href="#">Este es un enlace</a>';
//reemplaza todo, incluido el elemento que seleccionamos

//Crear elementos de html

console.log(document);

function crearElemento(){
    const img = document.createElement('img');
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";

    //appendChild
    $card.appendChild(img);
}

crearElemento();
