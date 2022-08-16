'use strict';

function clearToDos(todo, req, res) {
  todo.clear()
    .then(() => {
      res.status(200);
      res.json(res);
      res.end();
    })
    .catch(({
      message
    }) => {
      res.status(500);
      res.json({
        error: message
      });
    });
};

module.exports = clearToDos;