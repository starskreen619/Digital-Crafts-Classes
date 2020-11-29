const http = require("http");

const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>My food</title>
          </head>
          <body>
              <h1>This is my favorite food!</h1>
              <ul>
                  <li>Pizza!</li>
                  <li>Arepas!</li>
                  <li>Burgers!</li>
              </ul>
              <script>
                  console.log("Magic")
              </script>
          </body>
      </html>
  `;

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.writeHead("text/html", "application/json");
  res.end(htmlContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
