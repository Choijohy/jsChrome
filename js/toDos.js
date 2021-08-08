const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.querySelector("#toDoList");
const saveToDos = localStorage.getItem("toDos");
let toDos = [];


function toDoSave(event){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function toDoRemove(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    toDoSave();
}

function toDoWrite(toDoOBJ){
    const li = document.createElement("li");
    li.id = toDoOBJ.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = toDoOBJ.text;
    button.innerText = "❌";

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click",toDoRemove);
}

function toDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    const toDoOBJ = {
        text:toDo,
        id:Date.now(),
    }
    toDoInput.value = "";
    toDoWrite(toDoOBJ);
    toDos.push(toDoOBJ);
    toDoSave(toDoOBJ);
}

toDoForm.addEventListener("submit",toDoSubmit);

if (saveToDos!==null){
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach(toDoWrite);
    toDos = parsedToDos;

    
}else{
    
}