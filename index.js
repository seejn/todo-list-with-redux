import {createStore} from 'redux';
import todoReducer from './public/js/reducer'
import {addTodo, deleteTodo, toggleTodo, updateTodo} from './public/js/actions'

const store = createStore(todoReducer)

const render = () => {
    const todoList = document.getElementById('todo-list');
    const todos = store.getState().todos;
    
    todoList.innerHTML = '';
    todos.forEach(todo => {
        
        const item = document.createElement('div')
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        
        label.id=todo.id
        label.textContent = todo.task;
        label.addEventListener("dblclick", () => {
            const newTask = prompt("Enter New Task: ");
            if(newTask === null) return;
            store.dispatch(updateTodo(todo.id, newTask));
        });
        label.addEventListener("click", () => {
            store.dispatch(deleteTodo(todo.id));
        });

        checkbox.type= "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener('click', () => {
            store.dispatch(toggleTodo(todo.id))
        })

        item.appendChild(checkbox);
        item.appendChild(label);
        todoList.appendChild(item)
    });
};

const displayState = () => {
    const todos = store.getState().todos;
    console.log("inside displayState updated todos:", todos)
}

store.subscribe(render)
store.subscribe(displayState)

const addTodoButton = document.getElementById('add-todo-btn');
const todoInput = document.getElementById('todo-input');

addTodoButton.addEventListener("click", () => {
    const todoText = todoInput.value;
    if(todoText){
        store.dispatch(addTodo(todoText));
        todoInput.value = ''
    }
})
