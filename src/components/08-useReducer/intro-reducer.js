
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    
    switch ( action?.type ){
        case 'agregar':
            state = [ ...state, action.payloand ];
            break;
        case 'eliminar':
            console.log('elimina');
            break;
        
        default:
            console.log('Default action');
        
    }
    
    return state;
}

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payloand: newTodo
}

const todos = todoReducer(initialState, agregarTodoAction )



console.log(todos);