'use strict';

const fs = require("fs");

const add = (task) => {
  let Tasks = [];
  let newTask = task;

  let todo = fs.readFileSync("./assets/todo.json");
  Tasks = JSON.parse(todo);

  if (Tasks.length === 0) {
    Tasks.push(newTask);
    fs.writeFileSync("./assets/todo.json", JSON.stringify(Tasks));
  } else {
    let newJson = fs.readFileSync("./assets/todo.json");
    Tasks = JSON.parse(newJson);
    Tasks.push(newTask);
    fs.writeFileSync("./assets/todo.json", JSON.stringify(Tasks));
  }
};

module.exports = {
  add
};