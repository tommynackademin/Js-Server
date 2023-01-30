const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/key", (req, res) => {
  res.send(process.env.key);
});

app.listen(3000, () => {
console.log("Server is listening on port 3000");
});