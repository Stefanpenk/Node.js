'use strict';

async function readToDo(todo, req, res) {
  const id = req.params.id;

  todo.oneTask(id)
    .then(todo => {
      res.json({
        todo
      });
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
}

module.exports = readToDo;