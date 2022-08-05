const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max - 1));
}
app.get("/", (req, res) => {
  res.send("<h1>It's working 🤗</h1>");
});
app.get("/random-number", (req, res) => {
  res.send(getRandomInt(10));
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
