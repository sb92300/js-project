const todoForm = document.querySelector('.js-todo'),
      todoInput = todoForm.querySelector('input'),
      todoUl = document.querySelector('.js-list');

const TODO_LS = "ToDoList";
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteHandler(e) {
    const btn = e.target;
    const li = btn.parentNode;
    todoUl.removeChild(li);

    const cleanToDos = toDos.filter((toDo)=> {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const idSpan = document.createElement('span');
    const del = document.createElement('button');
    const newId = toDos.length + 1;
    del.innerText="X";
    del.classList.add("button-style")
    del.addEventListener('click', deleteHandler);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(del);
    li.id = newId;
    li.classList.add("li-style");
    todoUl.appendChild(li);
    const todoObj = {
        text : text,
        id : newId
    }
    toDos.push(todoObj);
    saveToDos();
}

function submitHandler(e) {
    e.preventDefault();
    const myToDo = todoInput.value;
    paintToDo(myToDo);
    todoInput.value="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null) {
        const parseToDo = JSON.parse(loadedToDos);
        parseToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    };
};

function init() {
    loadToDos();
    todoForm.addEventListener('submit',submitHandler);
}

init();