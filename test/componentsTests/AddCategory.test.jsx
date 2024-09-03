import { AddCategory } from "../../src/components/AddCategory"
import {render, screen, fireEvent} from "@testing-library/react"


describe('Pruebas en AddCategory', () => {
    test('debe cambiar el valor de la caja de text', () => {
        render(<AddCategory onNewCategory= {()=> { } } />);
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target:{value:'Saitama'}});
        expect(input.value).toBe('Saitama');
    })
    
    test('debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn(); //fn función Mock (simulación)
        render(<AddCategory onNewCategory= {onNewCategory } />);
        const input         = screen.getByRole('textbox');
        const form          = screen.getByRole('form')
        fireEvent.input(input, {target:{value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('') //ver si limpia la caja de texto
        //debemos evaluar si onNewCategory ha sido llamado con el valor que tenía la caja de texto
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    
    test('no debe llamar el onNewCategory si el input está vacio', () => {
        // const inputValue    = '';
        const onNewCategory = jest.fn(); //fn función Mock (simulación)
        render(<AddCategory onNewCategory= {onNewCategory } />);
        // const input         = screen.getByRole('textbox');
        const form          = screen.getByRole('form')
        // fireEvent.input(input, {target:{value: inputValue}});
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        
    });
})
