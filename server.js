const express = require("express");
const api = require("./Routes/api.js");
const html = require("./Routes/html.js");

var gradient = require('gradient-string');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

app.listen(PORT, () => 
  console.log(gradient.cristal(`App listening on: http://localhost:${PORT}`))
);