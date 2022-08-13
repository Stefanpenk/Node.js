'use strict';

const fs = require('fs');

const remove = function (nr) {
  let tasksList = fs.readFileSync("./assets/todo.json");

  let obj = JSON.parse(tasksList);

  let copyOfTasks = [];

  for (let i = 0; i < obj.length; i++) {
    copyOfTasks.push(obj[i]);
  }

  if (copyOfTasks.length === 0) {
    console.log('You have no tasks for now.');
  } else if (copyOfTasks.length > 0 && copyOfTasks.length >= nr) {
    const removedTask = copyOfTasks.splice(nr - 1, 1);
    console.log(`${removedTask} removed from you to-do list.`);
    fs.writeFileSync("./assets/todo.json", JSON.stringify(copyOfTasks));
  } else {
    console.log('Number you wrote was too big or 0.');
  }
};

module.exports = {
  remove
};