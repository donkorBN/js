const todoList = []


function addTodo(){
    const inputElement = document.querySelector('.input_field');
    const taskName = inputElement.value;

    //const inputField = document.querySelector('.price');
    //let cost = Number(inputField.value)

    todoList.push(taskName)
    console.log(todoList)

    inputElement.value = '';

    }

