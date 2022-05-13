let busquedaInf = window.location.href.split("=").pop();
const busquedaAnimes = document.getElementById('busquedaAnimes');


const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`;//&order_by=popularity

fetch(urlBusqueda)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data.data);
            const resultados = data.data;

            /* const datosEl = {
                nombre: resultados.title,
                    imagen: resultados.images.jpg.image_url,
                    id: resultados.mal_id,
                    sinopsis: resultados.synopsis,
            } */

            resultados.forEach(anime => {
                const datosNecesarios = {
                    nombre: anime.title,
                    imagen: anime.images.jpg.image_url,
                }

                const template = `
                <div class="col mb-4">
                      <div class="card h-100">
                        <img src="${datosNecesarios.imagen}" class="card-img-top" alt="${datosNecesarios.nombre}">
                        <div class="card-body">
                          <h5 class="card-title">${datosNecesarios.nombre}</h5>
                        </div>
                      </div>
                    </div>
                `;

                busquedaAnimes.innerHTML += template
            });
        })