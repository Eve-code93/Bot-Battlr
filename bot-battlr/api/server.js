// bot-battlr/api/server.js
const jsonServer = require('json-server');
const path       = require('path');

const server  = jsonServer.create();
const router  = jsonServer.router(path.join(__dirname, 'db.json'));
const middle  = jsonServer.defaults();

server.use(middle);
server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`JSON-Server running on port ${port}`);
});
