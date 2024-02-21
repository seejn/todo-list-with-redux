export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export function addTodo(task){
    return {
        type: ADD_TODO,
        payload: {
            task
        }
    }
}

export function deleteTodo(id){
    return {
        type: DELETE_TODO,
        payload: {
            id,
        }
    }
}

export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        payload: {
            id,
        }
    }
}

export function updateTodo(id, task){
    return {
        type: UPDATE_TODO,
        payload: {
            id, 
            task,
        }
    }
}
