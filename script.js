function addTask(){

let input = document.getElementById("taskInput");
let text = input.value;

if(text === "") return;

let li = document.createElement("li");
li.textContent = text;

let deleteBtn = document.createElement("button");
deleteBtn.textContent="delete";
deleteBtn.onclick=function(){
li.remove();
};
li.appendChild(deleteBtn);
document.getElementById("taskList").appendChild(li);

input.value = "";

}