const http = require("http");

let people = [
  { firstName: "Andres", lastName: "Santana", email: "andres@gmail.com" },
  { firstName: "josh", lastName: "Santana", email: "josh@gmail.com" },
  { firstName: "kevin", lastName: "Santana", email: "kevin@gmail.com" },
];

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  res.writeHead = (200,{
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin":"*"
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
