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

app.get('/files', (_, res) => {
  const contenue = "hello les toutous"
  fs.writeFileSync('perssonage/hello.txt', contenue);
  res.send("ok")
})

ViteExpress.listen(app, parseInt(PORT), () =>
  console.log("Server is listening on port " + PORT + "...")
);
