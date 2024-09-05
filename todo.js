const todoList = []

let inputValue = input.value

function addTodo(){
    const inputElement = document.querySelector('.input_field');
    const taskName = inputElement.value;

    //const inputField = document.querySelector('.price');
    //let cost = Number(inputField.value)

    todoList.push(taskName)
    console.log(todoList)

    inputValue = '';
    }

function displayTodo(){
    const display = document.querySelector('.display');
    const taskName = display.value;

    display.innerHTML(todoList[taskName]);
}
