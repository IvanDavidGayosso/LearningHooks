import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);


    test('debe de mostrarse correctamente', () => {
        
        Storage.prototype.setItem = jest.fn(() => {});

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {
        
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });


    
    


})
