//Select all elements.
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

//All event listeners.
function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}


function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğinize emin misiniz?")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e){
    const filterValue =e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    Array.from(listItems).forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display:none !important");
        }
        else{
            listItem.setAttribute("style","display:block");
        }
    });
}

function deleteTodo(e){
    if(e.target.classList.contains("fa-remove")){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("succes","Todo silindi...")
    }
}

function deleteTodoFromStorage(deleteTodo){
    let todos =getTodosFromStorange();

    todos.forEach(function(todo,index){
        if(todo===deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorange();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}


function getTodosFromStorange(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoStorange(newTodo){
    let todos = getTodosFromStorange();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type, message){
    const alertMessage = document.createElement("div");
    alertMessage.className = `alert alert-${type}`; 
    alertMessage.textContent = message;

    firstCardBody.appendChild(alertMessage);
    
    //setTimeout
    setTimeout(function(){
        alertMessage.remove();
    }, 1500); 
}


function addTodo(e){
    const newTodo = todoInput.value.trim(); 

    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo giriniz...");
    }
    else{
        addTodoToUI(newTodo);
        addTodoStorange(newTodo);
        showAlert("success","Todo başarı ile eklendi...");
    }
    


    e.preventDefault();
}


//Will add the string value to the list.
function addTodoToUI(newTodo){
    //Elements will be generated dynamically.


    //list creation                    
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";


    //link creation
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";        
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    //Add the text node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Adding a list item to a todo list
    todoList.appendChild(listItem);

    todoInput.value = "";

}