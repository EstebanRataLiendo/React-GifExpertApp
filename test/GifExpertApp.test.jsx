// import {render, screen} from '@testing-library/react'
// import { GifExpertApp } from '../src/GifExpertApp';


// describe('Pruebas en GifExpertApp', () => {
//     test('no debe de replicar categorias', () => {
//         const newCategory = jest.fn();
//         render(<GifExpertApp newCategory={newCategory} />) 
//         const category         = screen.getByRole('textbox');
//         fireEvent.input(category, {target:{value: newCategory}});

//         screen.debug();
//         expect(newCategory).toHaveBeenCalledTimes(0);
        
//     });
// })


// test('no debe llamar el onNewCategory si el input está vacio', () => {
//     // const inputValue    = '';
//     const onNewCategory = jest.fn(); //fn función Mock (simulación)
//     render(<AddCategory onNewCategory= {onNewCategory } />);
//     // const input         = screen.getByRole('textbox');
//     const form          = screen.getByRole('form')
//     // fireEvent.input(input, {target:{value: inputValue}});
//     fireEvent.submit(form);
//     expect(onNewCategory).toHaveBeenCalledTimes(0);
// });