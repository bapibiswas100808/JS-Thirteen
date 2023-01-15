const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-tasks");
const errorDiv = document.getElementById("error-text");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;

  if (taskText) {
    errorDiv.innerHTML = "";
    taskInput.value = "";

    // create Div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // Create input
    const singleTaskText = document.createElement("input");
    singleTaskText.type = "Text";
    singleTaskText.value = taskText;
    singleTaskText.setAttribute("readonly", "readonly");

    // creat buttons
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    // Create component
    singleTaskDiv.appendChild(singleTaskText);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    // Add the task
    taskDiv.appendChild(singleTaskDiv);

    // Edit task
    editTask.addEventListener("click", function (e) {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";
        singleTaskText.removeAttribute("readonly");
        singleTaskText.focus();
        completeTask.innerText = "Complete";
      } else {
        editTask.innerText = "Edit";
        singleTaskText.setAttribute("readonly", "readonly");
      }
    });
    // Complete Task

    completeTask.addEventListener("click", function (e) {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    // Delete Function
    deleteTask.addEventListener("click", function (e) {
      taskDiv.removeChild(singleTaskDiv);
    });
  } else {
    errorDiv.innerHTML = "<p>Please write task name!<p/>";
  }
});
