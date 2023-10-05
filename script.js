//Getting Elements
const inputField = document.querySelector('.input-field'),
taskList = document.querySelector(".task-list"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.getElementById("clear-btn");

//update number of pending tasks
function updateNumberOfTasks() {
	let pendingTasks = document.querySelectorAll(".pending");
	pendingNum.innerText = pendingTasks.length > 0 ? pendingTasks.length : "no";
}

//add task to list
inputField.addEventListener("keydown", (e) => {
	let inputValue = inputField.value.trim();
	if (e.key === "Enter" && inputValue.length > 0) {
		let newElement = `<li class="task pending" onclick="toggleClass(this)">
		<input type="checkbox"/>
		<div class="added-task">${inputValue}</div>
		<span class="material-icons trash-icon" onclick="deleteTask(this)">delete</span>
		</li>`;
		taskList.insertAdjacentHTML("beforeend", newElement);
		updateNumberOfTasks();
		inputField.value = "";
	}
})

//toggling class on checking / unchecking tasks
function toggleClass(e) {
	const checkBox = e.querySelector("input");
	checkBox.checked = checkBox.checked ? false : true;
	e.classList.toggle("pending");
	updateNumberOfTasks();
}

//remove individual task
function deleteTask(e) {
	e.parentNode.remove();
	updateNumberOfTasks();
}

//clear tasks from list
clearButton.addEventListener("click", () => {
	taskList.innerHTML = "";
	updateNumberOfTasks();
})