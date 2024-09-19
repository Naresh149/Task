const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Event listener for adding tasks
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  addTask(taskText);
  taskInput.value = ""; // Clear the input after adding the task
});

// Function to add a new task
function addTask(taskText) {
  // Create task item
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // Create task text
  const taskPara = document.createElement("p");
  taskPara.textContent = taskText;

  // Create Complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => completeTask(taskPara));

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTask(taskItem));

  // Append task and buttons to task item
  taskItem.appendChild(taskPara);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);

  // Add task item to task list
  taskList.appendChild(taskItem);
}

// Function to mark task as complete
function completeTask(taskPara) {
  taskPara.style.textDecoration = "line-through";
  taskPara.style.color = "gray";
}

// Function to delete a task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
console.log("jeee");
