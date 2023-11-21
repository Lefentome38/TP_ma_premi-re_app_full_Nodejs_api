import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT as string;

app.get("/start", (_, res) => {
  console.log("bonjour");
  res.end("ok ")
});

app.get('/hello/:text_nom', (req, res) => {
  console.log("hello");
  res.send("Bonjour " + req.params.text_nom)
})

import fs from 'fs';

app.get('/files/:pseudonyme', (req, res) => {
  req.params.pseudonyme
  const contenue = "votre pseudonyme " + req.params.pseudonyme  
  fs.writeFileSync('perssonages/'+ req.params.pseudonyme + '.json', contenue);
  res.send("ok")
})

app.get('/perssonages/:pseudonyme/:contenue_a', (req, res) => {
  req.params.contenue_a 
  const contenue = req.params.contenue_a
  fs.writeFileSync('perssonages/:pseudonyme.json', contenue);
  res.send("enregister")
})

ViteExpress.listen(app, parseInt(PORT), () =>
  console.log("Server is listening on port " + PORT + "...")
);