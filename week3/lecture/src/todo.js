'use strict';

const fs = require('fs');
const uuid = require('uuid/v4');

const DEFAULT_ENCODING = 'utf8';


class Todo {
  constructor(filename) {
    this._filename = filename;
  }

  async create(description) {
    const todos = await this.read();

    const todo = {
      id: uuid(),
      done: false,

      description
    };

    todos.push(todo);

    await this._save(todos);

    return todo;
  }

  read() {
    return new Promise(resolve => {
      fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
        if (error)
          return resolve([]);

        return resolve(JSON.parse(data));
      });
    });
  }

  async update(id, description) {
    const todos = await this.read();

    const todo = todos.find(t => t.id === id);
    if (todo == null) {
      const error = new Error(`To-do with ID ${id} does not exist`);
      error.code = 'not-found';
      throw error;
    }

    todo.description = description;

    await this._save(todos);

    return todo;
  }

  async delete_(id) {
    const todos = await this.read();
    const filteredTodos = todos.filter(t => t.id !== id);

    return this._save(filteredTodos);
  }

  async clear() {
    const todos = [];

    await this._save(todos);

    return 'all tasks deleted';
  }

  async readToDo(id) {
    const todos = await this.read();

    const oneTask = todos.find(t => t.id === id);
    if (oneTask == null) {
      const error = new Error(`ID ${id} you wrote does not exist.`);
      error.code = 'not-found';
      throw error;
    } else {
      return oneTask;
    }
  }

  async patch(id, done, description) {
    const todos = await this.read();

    const todo = todos.find(t => t.id === id);
    if (todo == null) {
      const error = new Error(`To-do with ID ${id} does not exist.`);
      error.code = 'not-found';
      throw error;
    }

    if (done !== null) {
      todo.done = done;
    }

    todo.description = description;

    await this._save(todos);

    return todo;
  }
  // Methods starting with underscore should not be used outside of this class
  _save(todos) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this._filename,
        JSON.stringify(todos, null, 2),
        error => error == null ?
        resolve() :
        reject(error)
      );
    });
  }
}

module.exports = Todo;