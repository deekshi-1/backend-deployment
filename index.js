require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;
const env = process.env.ENV_TYPE;

app.get("/", (req, res) => {
  res.send("Works");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.num1);
  const b = parseInt(req.query.num2);
  res.send("Sum is: " + (a + b));
});

app.listen(PORT, () => {
  console.log(`Works as: ${env} on port: ${PORT}`);
});
