'use strict';

const deserializeTodo = require('./deserializeTodo');

function patchList(todo, req, res) {
  deserializeTodo(req, res)
    .then(({
      done,
      description
    }) => {
      const id = req.params.id;
      return todo.patch(id, done, description);
    })
    .then(todo => {
      res.status(200);
      res.json({
        todo
      });
    })
    .catch(({
      message,
      code
    }) => {
      res.status(code === 'not-found' ? 404 : 500);
      res.json({
        error: message
      });
    });
}

module.exports = patchList;