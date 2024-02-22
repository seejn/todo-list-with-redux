import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO} from './actions'
const initialState = {
    todos: []
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case ADD_TODO: return{
            ...state,
            todos: [...state.todos, {id: Date.now(), task: action.payload.task, completed: false}],
        }

        case DELETE_TODO:
            const notCompletedTodos = state.todos.filter(todo => !todo.completed);
        
            const completedTodos = state.todos.filter(todo => todo.completed);
            const filteredTodos = completedTodos.filter(todo => todo.id !== action.payload.id); 

            return {...state, todos: [...filteredTodos, ...notCompletedTodos]};

        case TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id) return { ...todo, completed: !todo.completed}
                else return todo
            })
        }

        case UPDATE_TODO: return {
            ...state,
            todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id) return { ...todo, task: action.payload.task}
                else return todo 
            })
        }
        default: return state;
    }
}