import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas en hook useForm', ()=>{
    
    const initialForm = {
        name: 'Ivan David',
        email: 'david@email.com'
    }

    test('debe de regresar un formulario por defecto',()=>{
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;
        
        expect( formValues ).toEqual( {...initialForm} );
        expect( typeof(handleInputChange) ).toBe('function');
        expect( typeof(reset) ).toBe('function');
    });

    test('debe de cambiar el valor del formulario nombre',()=>{
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange]  = result.current;

        act(() => {
            handleInputChange({ 
                target: {
                    name : 'name', 
                    value: 'David Acosta'
                }
            });
        });

        const [ formValues ]  = result.current;
        expect( formValues ).toEqual({...initialForm, name: 'David Acosta'});
    });

    test('debe de cambiar el valor del formulario nombre',()=>{
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , , reset]  = result.current;

        act(() => {
            reset();
        });

        const [ formValues ]  = result.current;
        expect( formValues ).toEqual({...initialForm});
    });

})