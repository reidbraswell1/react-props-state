# Create a todo list that can be viewed by the user, and a form where the user can add new items to the todo list stored in state.

![To Do List](/ReactStateAndProps-ToDoList.png?raw=true "To Do List")

1. Project structure:
    1. Create a new folder within `src/` called `components/`
    1. Change your `App.js` to `App.jsx`. This will enable more VSCode emmet abbreviations for the file.
    1. Change the contents of your `App.jsx` to be a class with a render method that returns `<div><h1>Hello World</h1></div>`.
1. Managing State
    1. Create a constructor for the `App` class.
    1. In the body of the constructor, assign an object to a property called `state`.
    1. On the state object, add two properties:
        - `list`
        - `text`
    1. Assign `list` as the following array: `["ready", "set", "GO"]`
    1. Assign `text` as an empty string
1. Rendering Lists
    
    A __rendered list__ in React is an array of JSX that we return to the ReactDOM. Render the state list as a React rendered list.
    1. Update the `return` statement of the render method to have an `ul` underneath the `h1`.
    1. As a child of the `ul`, call `this.state.list.map` within a JSX expression.
    1. The callback function passed into the map method should return a `li` element.
    1. For each string in `this.state.list` that you map over, use the string value as the text content of the returned `li`.
    1. Lastly, add a `key` prop to the returned `li` that is set to the value of the element's index in `this.state.list`.
1. Controlled Inputs 
    
    A controlled input in React is an input where it's `value` attribute is set to a state value, and when the value of the input changes, the component state changes. Create a controlled input so that `this.state.text` is bound to the input.
    1. Update the `return` statement of the `render` method to have an input above the `ul`.
    1. Add a `value` prop to the `input` that is set to `this.state.text`.
    1. Add an `onChange` prop to the `input` that is set to a function that will:
        - Receive the __HTMLChangeEvent__ as a parameter.
        - Call `this.setState()` to update `this.state.text` to `e.target.value` (the value that is in the input).
1. Updating State

    Add functionality to add a new item to the todo list.
    1. Wrap the `input` element in a `form`
    1. Add a `button` element below the `input` element at the bottom of the `form` element.
        - Add a `type` attribute of "submit".
        - Add text content of "Add".
    1. Create a method named `onSubmit` on the `App` class that will:
         - Receive the `HTMLSubmitEvent` as a parameter.
         - Call the `preventDefault()` method on the parameter event.
         - Call `this.setState()` to update the `this.state.list` value to a new array contains all of the previous list items and the current `this.state.text`.
    1. Add an `onSubmit` prop to the `form` element that is set to the method `this.onSubmit`.
    1. In the constructor, bind `this` to the `this.onSubmit` method.
        - `this.onSubmit = this.onSubmit.bind(this)`;

At this point, you should be able to type a new task in the input element, click add, and see the new list item displayed in the unordered list on the screen!

__Additional features added:__
- Boostrap styling.
- Delete button for deleting entries from the to do list.

