const urlTop = 'https://api.jikan.moe/v4/top/anime';

fetch(urlTop)
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);

            const animesTop = datos.data.slice(0,8);

            animesTop.forEach(anime => {
                console.log(anime);
                
            });
        })