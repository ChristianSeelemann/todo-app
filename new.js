const form = document.querySelector(".newTasksForm");

form.onsubmit = function (event) {
  event.preventDefault();

  //Datum abrufen
  const checkedDate = document.querySelector(".newTaskForm__radio:checked")
    .value;

  //Text abrufen
  const taskInput = document.querySelector(".newTaskForm__textInput").value;

  //Daten ausgeben
  console.log(checkedDate, taskInput);
};
