const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Ola meu chapa");
});

app.get("/blog", (req, res) => {
    res.send("Bem vindo ao meu blog")
});

app.get("/perfil/opcoes", (req, res) => {
    res.send("<h1>Aqui você pode editar seu perfil</h1>");
});



app.listen(3000, (error) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log("Server started successfully");
  }
});
