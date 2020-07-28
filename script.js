// Selectors
todoInput = document.querySelector('.todo-input');
todoButton = document.querySelector('.todo-btn');
todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo)


//Functions

function addTodo (e){
    e.preventDefault();
    //Todo Div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //Append list
    todoList.appendChild(todoDiv);
    
    //Clear todo input
    todoInput.value = "";

}

function deleteTodo (e){
    const item = e.target;
    //Delete todo

    if ( item.classList[0] === "trash-btn"){
        const todo = item.parentElement;

        //Animation
        todo.classList.add("fade");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        
    }

    //Check Mark
    if ( item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


