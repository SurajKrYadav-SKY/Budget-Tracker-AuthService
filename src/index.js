const bodyParser = require("body-parser");
const connect = require("./config/db");
const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log("Server started at PORT:", PORT);
  await connect();
  console.log("MongoDB connected");
});
