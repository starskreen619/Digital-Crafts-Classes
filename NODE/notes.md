BASIC SERVER

<!-- const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); -->

////////////////////

"npm --version" checks version of npm

"npm init -y" needs to be done on the project folder -y says yes to all prompts creates package.json

"npm install nameOfProject" install third party packages

/////////////////////

<!-- var cowsay = require("cowsay");

console.log(cowsay.say({ text: "I'm a module" })); -->

way to run a package

/////////////////////

<!-- {
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./index.js"
  }
} -->

this is how to create a script
