## TODO-LIST with Redux [ Vanilla Javascript ]

## actions.js

This file defines action types and action creators. Action types (ADD_TODO, DELETE_TODO, UPDATE_TODO and TOGGLE_TODO) are string constants that represent the type of action being performed. Action creators (addTodo, deleteTodo, updateTodo and toggleTodo) are functions that return action objects.

- addTodo: Creates an action object with type ADD_TODO and a payload containing the task to be added.
- deleteTodo: Creates an action object with type DELETE_TODO and a payload containing the ID of the task to be deleted.
- updateTodo: Creates an action object with type UPDATE_TODO and a payload containing the ID of the task to be updated and task to update with.
- toggleTodo: Creates an action object with type TOGGLE_TODO and a payload containing the ID of the task to toggle task completed.

## reducer.js

This file defines the reducer function. The reducer is a pure function that takes the current state and an action, and returns a new state based on that action.

- initialState: Defines the initial state of the application, which includes an empty array for todos.
- reducer: Handles different action types and returns a new state accordingly.
- For ADD_TODO, it adds a new task to the todos array with a unique ID generated using Date.now().
- For DELETE_TODO, it checks if the task is completed and if yes filters out the task with the given ID from the todos array.
- For UPDATE_TODO, it maps the todos and match the todo with given id then updates with newTask and returns new todos
- For TOGGLE_TODO, it maps the todos and match the todo with given id then toggles the completed status

## index.js

This file sets up the Redux store, subscribes to changes in the store, and connects the UI to Redux actions.
- store: Creates a Redux store with the todoReducer.
- render: Renders the UI based on the current state of the store. It retrieves the todos from the store's state and updates the DOM accordingly.
- store.subscribe(render): Subscribes to changes in the store, so that the render function is called whenever the state changes.
- addTodoButton and todoInput: References to HTML elements for adding todos.
- Event listeners are attached to addTodoButton to dispatch addTodo action when clicked, to elements (todos) to dispatch deleteTodo action when clicked and updateTodo when double clicked and to checkbox to toggleTodo action when checked.

## How It Works

When the user clicks the "Add Todo" button, the addTodoButton event listener triggers.
It extracts the todo text from the input field (todoInput.value) and dispatches an action (addTodo) with that text.
The addTodo action creator creates an action object with type ADD_TODO and the provided task text.
The reducer receives this action, adds the task to the todos array, and returns a new state.
Since the state has changed, the store notifies its subscribers (in this case, the render function).
The render function updates the UI based on the new state, displaying the added task.

Similarly, when a user checks the checkbox, the process repeats with toggleTodo action.
Now, after the checkbox is checked and user clicks on a todo item ,the process repeats with the deleteTodo action.

Likewise, when a user double clicks on todo item, the updateTodo event listener triggers.
A prompt is popped up for newTask input. It extract the new todo text from the prompt field (newTask = prompt("Enter new task: "))
and dispatches an action (updateTodo) with the id of the item and newTask

This way, Redux manages the state of the application, and the UI reflects those changes accordingly.
