const express = require("express");
const phrases = require('./data/data');

const app = express();

app.use(express.json());

app.get("/", (_req, res) => res.status(200).json({
  message: "Este é uma API modelo, modifique como desejar",
  usage: "Há rotas pré criadas como /phrases e /healthcheck"
}));

app.get('/phrases', (_req, res) => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrases = phrases[randomIndex];
  res.status(200).json({ frase: randomPhrases });
});

app.get('/healthcheck', (_req, res) => res.status(200).json({ message: "Health Check" }));

module.exports = app;