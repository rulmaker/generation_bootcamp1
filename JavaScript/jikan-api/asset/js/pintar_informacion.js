let idInf = window.location.href.split("id=").pop();
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const imagen = document.getElementById('imagen');
const agregar = document.getElementById('agregar');
let favoritos = []


const urlId = `https://api.jikan.moe/v4/anime/${idInf}`;

fetch(urlId)
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos.data);

            const datosNecesarios = {
                id: datos.data.mal_id,
                nombre: datos.data.title,
                imagen: datos.data.images.jpg.large_image_url,
                sinopsis: datos.data.synopsis
            }

            console.log(datos.data);
            

            titulo.innerHTML = datosNecesarios.nombre;
            descripcion.innerHTML = datosNecesarios.sinopsis;
            imagen.innerHTML = `<img src="${datosNecesarios.imagen}" alt="${datosNecesarios.nombre}" class="img-fluid">`


            agregar.addEventListener('click', () => {
                console.log('agregar');

                const datosObj = {
                    id: datosNecesarios.id,
                    nombre: datosNecesarios.nombre
                }
                

                if (localStorage.getItem('favoritos')) {
                    console.log('Existe un elemento');
                    let fav = JSON.parse(localStorage.getItem('favoritos'));
                    /* if(fav.filter(el => el.id === datosObj.id)){
                        fav.push(datosObj)
                        localStorage.setItem('favoritos', JSON.stringify(fav))
                    }else {
                        console.log('ya existe');
                    } */
                    fav = fav.filter((el) => el.nombre != datos.nombre)
                    console.log(fav);

                }else{
                    favoritos.push(datosObj);
                    localStorage.setItem('favoritos', JSON.stringify(favoritos));
                }
                
                
                
            })
        })


