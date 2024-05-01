const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Ola meu chapa");
});

app.get("/blog/:artigo?", (req, res) => {
    let artigo = req.params.artigo;
    if (artigo) {
        res.send(`<h2>Artigo: ${artigo}</h2>`);
    } else {
        res.send("Bem vindo ao meu blog");
    }

});

app.get("/perfil/opcoes", (req, res) => {
    let perfil = req.query["perfil"];

    if (perfil) {
        res.send(perfil);
    } else {
        res.send("Nenhum perfil informado");
    }
});

app.get("/ola/:nome/:empresa", (req, res) => {
    // res.send("<h1>Olá, </h1>");
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send(`<h1>Olá, ${nome} do ${empresa}</h1>`);
});

app.listen(3000, (error) => {
  if (error) {
    console.log("Error starting the server");
  } else {
    console.log("Server started successfully");
  }
});
