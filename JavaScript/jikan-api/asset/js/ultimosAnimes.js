const urlUltimos = "https://api.jikan.moe/v4/seasons/now";
const ultimosAnimes = document.getElementById('ultimosAnimes');

fetch(urlUltimos)
        .then(resp => resp.json())
        .then(datos => {
            
            const arregloAnimesUltimos = datos.data.slice(0, 16);

            //console.log(arregloAnimesUltimos);

            arregloAnimesUltimos.forEach(anime => {
                //console.log(anime);
                    
                const datosNecesarios = {
                    nombre: anime.title,
                    imagen: anime.images.jpg.image_url,
                    id: anime.mal_id,
                    sinopsis: anime.synopsis,
                }

                const template = `
                <div class="col mb-4">
                    <a href="informacion.html?id=${datosNecesarios.id}">
                      <div class="card h-100">
                        <img src="${datosNecesarios.imagen}" class="card-img-top" alt="${datosNecesarios.nombre}">
                        <div class="card-body">
                          <h5 class="card-title">${datosNecesarios.nombre}</h5>
                        </div>
                      </div>
                    </a>
                    </div>
                `;

                ultimosAnimes.innerHTML += template;
                //console.log(datosNecesarios);
            });
        })