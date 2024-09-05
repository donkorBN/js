const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-21'},
    {name: 'wash dishes',
   dueDate : '2022-12-21'}]

function displayTask() {

    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `
        <p>
            ${todo} 
            <button onclick="
            todoList.splice(${i}, 1)
            displayTask()
            ">Delete</button>
        </p> `
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



