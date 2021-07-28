const form = document.querySelector(".newTasksForm");

form.onsubmit = function (event) {
  event.preventDefault();

  const taskObject = { name: "", date: "", isDone: false };

  taskObject.date = document.querySelector(".newTaskForm__radio:checked").value;

  taskObject.name = document.querySelector(".newTaskForm__textInput").value;

  console.log(`Date: ${taskObject.date} and Task: ${taskObject.name}`);
};
