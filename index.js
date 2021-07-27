//const menuButton = document.querySelector(".menuButton");
//menuButton.onclick = createTaskListItem;

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem("Kaffee kochen");
const taskTwo = createTaskListItem("Javascript lernen");
taskList.append(taskOne, taskTwo);

function createTaskListItem(taskName) {
  const taskListItem = document.createElement("label");
  taskListItem.className = "taskItem";

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.type = "checkbox";
  taskItemInput.setAttribute("name", "tasks");

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__labelText";
  taskItemText.innerText = taskName;

  taskListItem.append(taskItemInput, taskItemText);
  taskList.append(taskListItem);

  return taskListItem;
}
