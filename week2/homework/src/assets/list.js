'use strict';

const fs = require('fs');

const list = function () {
  fs.readFile("./assets/todo.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    } else if (data.length <= 2) {
      console.log('No tasks for now');
    } else {
      let obj = JSON.parse(data);
      let tasks = [];
      for (let i = 0; i < obj.length; i++) {
        tasks.push(`Task nr${i + 1}: ${obj[i]}`);
      }
      console.log("THINGS TO DO:");
      console.log(tasks);
    }
  });
};

module.exports = {
  list
};