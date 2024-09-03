import { GifGrid } from "../../src/components";
import {render, screen} from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Piece'
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan imagenes desde useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://url.com/'
        },
        {
            id: '123',
            title: 'Inuyasha',
            url: 'https://lrumalala.com/'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
    });
})
