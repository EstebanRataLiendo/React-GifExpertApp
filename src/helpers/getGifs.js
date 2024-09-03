/*
Creamos una función asincrona para definir una URL que muestre la categoria elegida y cantidad.
Creamos una respuesta que espere al URL.
Tomamos la data que viene con las imagenes (en postman)
Mapeamos la data y tomamos tres propiedades que necesitamos.
Retornamos gifs
*/
import 'whatwg-fetch' // npm install whatwg-fetch

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vQb0C8eXdP86sOya0C285sFwfl7BDiz9&q=${category}&limit=5`
    const resp = await fetch(url);
    const {data}= await resp.json();
    const gifs = data.map(img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
};
