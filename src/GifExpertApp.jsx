/* 
Primero importamos react, states y los dos componentes.
Exportamos la app al main.
Dentro de la app usamos un useState para retornar un valor y actualizarlo.
-categories (es el valor inicial)
-setCategories (es el estado que vamos a actualizar)
Definimos una función "onAddCategory" que tome el parametro y lo rendelize actualizando el estado
-newCategorie (es el parametro de la nueva categoria que le demos al presionar Enter)
Si la categoria ya está repetida, entonces no hará nada
Si no está incluida, actualiza el valor del state con la nueva categoria
Retornamos un <h1> con el titulo
Retornamos el componente AddCategory para el input
-onNewCategory (propiedad del componente que le damos desde acá)
Le damos a la propiedad creada el valor del evento de la función onAddCategory
USAMOS {} PARA PONER UNA FUNCION EN JSX
Mapeamos todas las categorias existentes.
En el callback de la función llamamos al componente GifGrid.
Le damos un valor key único con el nombre de la categoria
Le damos una propiedad "category" con el nombre de la categoria tambien
*/

import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory =(newCategory)=>{
        // console.log(newCategory) 
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory = {/*event =>*/ onAddCategory/*(event)*/}
            />
            {
                categories.map((category) =>(
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}


