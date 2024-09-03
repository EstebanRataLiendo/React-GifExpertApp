import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import {renderHook, waitFor} from '@testing-library/react'



describe('Pruebas en hook useFetchGifs', () => {

    test('debe de regresar el estado ', () => {
        const {result} = renderHook( () => 
            useFetchGifs('Once Piece')
        );
        // console.log(result)
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    });

    test('debe retornar un arreglo de imagenes y el isLoading en false', async() => {
        const {result} = renderHook( () => 
            useFetchGifs('Once Piece')
        );
        console.log(result)

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    });
})
