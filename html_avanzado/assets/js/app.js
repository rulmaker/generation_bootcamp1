const formulario = document.querySelector('.formulario');
const objDatos = {};


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const datos = Object.fromEntries(
        new FormData(e.target)
    );
    console.log(datos);
}); 
 
