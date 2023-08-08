var list = document.getElementById("list");

function addTodo() {
    var input = document.getElementById("todo-Item");
  
    if (!input.value) {
        alert("Please Enter Value");
        return
    } 

// Create UI Of  List Item
console.log("Chal riya hha");
var li = document.createElement("li");
var liTxt = document.createTextNode(input.value);
li.setAttribute("class", "list-item");
li.appendChild(liTxt);

// Edit Button
var editBtn = document.createElement("button");
editBtn.innerHTML = "Edit";
editBtn.setAttribute("class", "edit-btn");
editBtn.setAttribute("onclick", "editItem(this)");
li.appendChild(editBtn);

// Delete Button

var deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete";
deleteBtn.setAttribute("class", "delete-btn");
deleteBtn.setAttribute("onclick", "deleteItem(this)");
li.appendChild(deleteBtn);

list.appendChild(li);

input.value = ""

}
function deleteAll() {
  list.innerHTML = "";
}

function deleteItem(e) {
  e.parentNode.remove();
}
function editItem(e) {
  var value = e.parentNode.firstChild.nodeValue;
  var newValue = prompt("Enter New Value", value);
  console.log(value);
  e.parentNode.firstChild.nodeValue = newValue;
}
