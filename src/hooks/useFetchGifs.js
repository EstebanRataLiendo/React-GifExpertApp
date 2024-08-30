//hook creado que necesita acceso a las imagenes basadas en categoría y las carga 
/*
Importamos el hook useState (cambia de estado)
Importamos el hook useEffect (sirve para disparar efectos secundarios)
Exportamos el useFetchGifs hook al GifGrid
Usamos dos useState, uno para las imagenes y otro para el Loading
Creamos una función asincrona getImages que trae el getGifs
Dentro de esta función seteamos el setImagen y el setIsLoading con sus nuevos valores
Usamos useEffect para que tome la función getImages sin que se disparen efectos secundarios?
Retornamos las images y el isLoading
*/

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async ()=> {
        const newImages= await getGifs(category)//devuelve la promesa
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages()
    },[])
    return {
        images: images,
        isLoading: isLoading
    }
}


