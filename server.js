const express = require('express');
const api = require("./Routes/api.js");
const html = require("./Routes/html.js");
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

app.use(express.static("public"));
app.use("/api", api);
app.use("/html", html);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
