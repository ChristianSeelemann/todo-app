import {
  stringifyJSONToLocalStorage,
  parseJSONFromLocalStorage,
} from "./utils/localStorage.js";

const form = document.querySelector(".newTasksForm");

form.onsubmit = function (event) {
  event.preventDefault();

  const newData = { name: "", date: "", isDone: false };

  newData.date = document.querySelector(".newTaskForm__radio:checked").value;

  newData.name = document.querySelector(".newTaskForm__textInput").value;

  const oldData = parseJSONFromLocalStorage("tasks", []);
  const taskArray = [...oldData, newData];

  stringifyJSONToLocalStorage("tasks", taskArray);

  location.href = "/";
};
