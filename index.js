const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// const server2 = jsonServer.create();
const router2 = jsonServer.router("discount.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);
server.use(router2);


server.listen(port);
