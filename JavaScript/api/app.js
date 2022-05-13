const datos = [
    {
        nombre: "Raul",
        edad: 25
    },
    {
        nombre: "Pedro",
        edad: 29
    },
    {
        nombre: "Maria",
        edad: 18
    },
]


function obtenerDatos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(datos);
        }, 3000)
    })
}
/*
obtenerDatos()
    .then((datos) => {
        console.log(datos);
    }) */

async function obtenerDatosAsync () {
    const datosObtenidos = await obtenerDatos();
    console.log(datosObtenidos);
}

obtenerDatosAsync();