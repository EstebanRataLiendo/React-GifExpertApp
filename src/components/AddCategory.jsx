/*
Componente que permite tomar el Enter y retornar un formulario con un input
Importamos el useState.
Exportamos la app y desestructuramos la propiedad "onNewCategory" de la app principal GifExpertApp
Usamos useState para retornar un valor y actualizarlo.
-onInputChange (la constante será igual al resultado de una función_
la cual toma cada cambio del setInputValue y la actualiza luego en el input [onChange])
-onSubmit (cuando presiono enter se ejecuta una función que actualiza el formulario)
-preventDefault (evita que se recargue la pagina en cada cambio)
Si el input esta vacío o con un solo caracter, no se ejecuta la función
Le da a la propiedad onNewCategory el valor del input sin espacios al comienzo y al final
Volvemos a poner en blanco el input.
Retornamos lo que vamos a renderizar:
    -form que se actualiza cuando presionamos enter
    -input con propiedades: tipo, placeholder, valor igual al input y 
    manejador de evento onChange que ejecuta onInputChange (sin esto no nos deja escribir en el input)
*/
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit= (e) => {
        e.preventDefault();
        if (inputValue.trim().length<=1) return;
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
            )
}

