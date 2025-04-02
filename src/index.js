const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started at PORT:", PORT);
});
