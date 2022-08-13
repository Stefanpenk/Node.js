'use strict';

const fs = require('fs');

const reset = function () {
  let tasks = fs.readFileSync("./assets/todo.json");
  let showTasks = JSON.parse(tasks);
  let deleteTasks = [];

  if (showTasks.length === 0) {
    console.log('There is nothing to reset.');
  } else {
    console.log('You have deleted all tasks from your list.');
    fs.writeFileSync("./assets/todo.json", JSON.stringify(deleteTasks));
  }
};

module.exports = {
  reset
};