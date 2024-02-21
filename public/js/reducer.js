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
            const findTodo = state.todos.find(todo => todo.id === action.payload.id);
            const newTodos = !findTodo.completed ? 
                {
                    ...state,
                }:
                {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.payload.id)
                }
            return newTodos;

        case TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return { ...todo, completed: !todo.completed}
                } 
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