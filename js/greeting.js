const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const welcome = document.querySelector("#loginSentence");
const toDoForm_hidden = document.querySelector("#toDoForm");
const toDoList_hidden = document.querySelector("#toDoList");

const USERNAME_KEY = "username"
var member = localStorage.getItem(USERNAME_KEY);

function loadingUser(){
    loginForm.classList.toggle("hidden");
    member = localStorage.getItem(USERNAME_KEY);
    welcome.innerHTML = `<h1>Hello ${member}</h1>`;
    welcome.classList.toggle("hidden");
    toDoList_hidden.classList.toggle("hidden");
    toDoForm_hidden.classList.toggle("hidden");
}
function onLoginSubmit(event){
   //브라우저가 function에 대해 하는 기본동작을 하지 않도록 함. ex - submit 후에 페이지가 새로고침 되는 것을 막음
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loadingUser();
}

if (member == null){
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    loadingUser();
}
