'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;
  let currentState = null;

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end('<h1>Hello</h1><br><h3>Choose between:<br><span>/state</span><br><span>/add</span><br><span>/subtract</span><br><span>/reset</span><br></h3>')
    } else if (req.url === "/state") {
      currentState = {
        "state": state
      };
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(currentState));
    } else if (req.url === "/add") {
      state++;
      currentState = {
        "state": state
      };
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(currentState));
    } else if (req.url === "/subtract") {
      state--;
      currentState = {
        "state": state
      };
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(currentState));
    } else if (req.url === "/reset") {
      state = 10;
      currentState = {
        "state": state
      };
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(currentState));
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });
      currentState = {
        "error": "Not found"
      };
      res.end(JSON.stringify(currentState));
    }
  });

  return server;
}

module.exports = {
  createServer
};
