'use strict';

// CRUD actions
module.exports = {
  createTodo: require('./createTodo'),
  readTodos: require('./readTodos'),
  updateTodo: require('./updateTodo'),
  deleteTodo: require('./deleteTodo'),
  clearToDos: require('./clearToDos'),
  readToDo: require('./readToDo'),
  patchList: require('./patchList'),
};