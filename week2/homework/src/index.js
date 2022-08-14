'use strict';

// TODO: Write the homework code in this file
const fs = require("fs");
const process = require('node:process')

const list = require("./assets/list");
const add = require("./assets/add");
const remove = require("./assets/remove");
const reset = require("./assets/reset");

switch (process.argv[2]) {
  case "help":
    fs.readFile('./assets/help.txt', 'utf8', (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
    break;
  case "list":
    list.list();
    break;
  case "add":
    add.add(process.argv[3]);
    break;
  case "remove":
    let nr = parseInt(process.argv[3]);

    if (Number.isInteger(nr) && nr > 0) {
      remove.remove(process.argv[3]);
    } else {
      console.log("Number must be integer and > 0");
    }
    break;
  case "reset":
    reset.reset();
    break;
  default:
    fs.readFile('./assets/help.txt', 'utf8', (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
    break;
}