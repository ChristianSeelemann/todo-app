import { parseJSONFromLocalStorage } from "./utils/localStorage.js";

//General

const taskList = document.querySelector(".taskList");

const parsedData = parseJSONFromLocalStorage("tasks", []);

const taskListItems = parsedData.map((task) => createTaskListItem(task));

taskList.append(...taskListItems);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  taskListItem.classList = "taskItem " + task.date;

  const taskItemInput = document.createElement("input");
  taskItemInput.className = "taskItem__checkbox";
  taskItemInput.type = "checkbox";
  taskItemInput.setAttribute("name", "tasks");
  taskItemInput.checked = task.isDone;

  const taskItemText = document.createElement("span");
  taskItemText.className = "taskItem__labelText";
  taskItemText.innerText = task.name;

  taskListItem.append(taskItemInput, taskItemText);

  return taskListItem;
}

//Filter
const todayFilter = document.querySelector("#today");
const tomorrowFilter = document.querySelector("#tomorrow");
const selectDateFilter = document.querySelector("#selectDate");

todayFilter.onclick = () => {
  todayFilter.setAttribute("checked", "true");
  taskList.innerText = "";
  const newListItems = parsedData.map((task) => createTaskListItem(task));
  const todayListItems = newListItems.filter(
    (task) => task.className == "taskItem today"
  );
  taskList.append(...todayListItems);
};

tomorrowFilter.onclick = () => {
  tomorrowFilter.setAttribute("checked", "true");
  taskList.innerText = "";
  const newListItems = parsedData.map((task) => createTaskListItem(task));
  const tomorrowListItems = newListItems.filter(
    (task) => task.className == "taskItem tomorrow"
  );
  taskList.append(...tomorrowListItems);
};

selectDateFilter.onclick = () => {
  todayFilter.setAttribute("checked", "true");
  taskList.innerText = "";
  const newListItems = parsedData.map((task) => createTaskListItem(task));
  const selectDateListItems = newListItems.filter(
    (task) => task.className == "taskItem selectDate"
  );
  taskList.append(...selectDateListItems);
};
