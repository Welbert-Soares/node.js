const http = require("http");

http
  .createServer((require, response) => {
    response.end(
      "<h1>Eai galera! </h1><h2>Meu primeiro servidor</h2><p>Meu primeiro servidor com Node.js</p>"
    );
  })
  .listen(3000);
console.log("Servidor rodando na porta 3000");
