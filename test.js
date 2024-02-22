const state = {
    todos: [
        {
            id: 1,
            task: "do something 1", 
            checked: true,
            isChecked: function (){
                return this.checked;
            }
        },
        {
            id: 2,
            task: "do something 2", 
            checked: true,
            isChecked: function (){
                return this.checked;
            }
        },
        {
            id: 3,
            task: "do something 3", 
            checked: false,
            isChecked: function (){
                return this.checked;
            }
        },
    ]
}

const todoToRemoveId = 2;

const checkedTodos = state.todos.filter(todo => todo.checked)
const unCheckedTodos = state.todos.filter(todo => !todo.checked)

const filteredTodo = checkedTodos.filter(todo => todo.id !== todoToRemoveId)

const updatedTodos = [...filteredTodo, ...unCheckedTodos]
const updatedState = {...state, todos: {...updatedTodos}}

console.log("initialTodos", state.todos)
console.log("checkedTodos", checkedTodos)
console.log("unCheckedTodos", unCheckedTodos)
console.log("todoToRemoveId", todoToRemoveId)
console.log("updatedState", updatedState)