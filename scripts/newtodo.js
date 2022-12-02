let list = [];
let currentId = 0;

if (localStorage.getItem("todolist") === null){
	list = [];
	currentId = 0;
}else{
	list = JSON.parse(localStorage.todolist);
}

function appendList(myform){
	let todolist = document.getElementById("todolist");
	list.push(item.value);
	localStorage.todolist = JSON.stringify(list);
	todolist.innerHTML += "<div id=" + currentId + ">"
							+ "<form onSubmit=\"deletePoint("
								+ currentId + ", '" + item.value + "'); return false;\">"
										+ 
											item.value 
										+ 
							"<input type=submit value='Удалить'></form></div>";
	currentId++;
	return false;
};

function deletePoint(id, task){
	let currentItem = document.getElementById(id);
	currentItem.remove();
	var pos = list.indexOf(task);
	list.splice(pos, 1);
	localStorage.todolist = JSON.stringify(list);
}

function loadTodo(){
	let todoList = JSON.parse(localStorage.todolist);
	let elem = document.getElementById("todolist");
	for(let i = 0; i < todoList.length; i++){
		elem.innerHTML += "<div id=" + currentId + ">"
							+ "<form onSubmit=\"deletePoint("
								+ currentId + ", '" + todoList[i] + "'); return false;\">"
										+ 
											todoList[i] 
										+ 
							"<input type=submit value='Удалить'></form></div>";
		currentId++;
	}
	return false;
}