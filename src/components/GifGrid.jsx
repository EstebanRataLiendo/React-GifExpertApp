/* 
Importamos el componente GifItem (Devuelve el url y titulo de los gif)
Importamos el hook useFetchGifs
Exportamos el componente GifGrid
Usamos el hook que creamos para tomar las imagenes y el Loading
Retornamos un <h3> con las category's
Preguntamos si isLoading es true, renderizamos <h2>
Retornamos un <div> con formato de css y mapeamos las imagenes tomadas del hook
En el mapeo usamos el componente GifItem para traer y renderizar las propiedades url, id y title
*/

import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category} </h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
            {
                images.map((image) =>(
                        <GifItem 
                            key={image.id}
                            {...image} //exparse todas las propiedades (url, id y title)
                        />
                ))
            }
            </div>
        </>
    )
}