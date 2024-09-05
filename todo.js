const todoList = []

function displayTask() {

    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `<p>${todo} <button>Delete</button></p> `
        todoListHTML += html
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    console.log(todoListHTML)
}

displayTask()
function addTodo(){
    const inputElement = document.querySelector('.input_field');
    const taskName = inputElement.value;

    //const inputField = document.querySelector('.price');
    //let cost = Number(inputField.value)

    todoList.push(taskName)
    console.log(todoList)

    inputElement.value = '';
    displayTask()
}

