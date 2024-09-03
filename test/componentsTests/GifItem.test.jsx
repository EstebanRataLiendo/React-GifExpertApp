import {  fireEvent, render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

const title = 'Prueba'
const url  = 'http://prueba-rata.com/'
describe('GifItem', () => {
    test('Debe hacer match con el snapshot ', () => {
        const {container}= render(<GifItem title={title} url={url} />);
        expect (container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug()
        // console.log(screen.getByRole('img').src)

        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
    })

    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
    
})
