const express = require("express");

const app = express();
const port = 9001;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  res.setHeader("Access-Control-Max-Age", "60");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/validation", (req, res) => {
  res.json({ isValid: true });
});

app.get("/", (req, res) => {
  //   asdsa;
  res.json({
    message: "ok",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "ok",
  });
});

app.get("/source-1", function (request, response) {
  setTimeout(() => {
    response.status(500).json({ type: "source-1" });
  }, 1000);
});

app.get("/source-2", function (request, response) {
  setTimeout(() => {
    response.json({ type: "source-2" });
  }, 10000);
});

app.get("/source-3", function (request, response) {
  setTimeout(() => {
    response.json({ type: "source-3" });
  }, 5000);
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Bad path",
  });
});

app.listen(port, () => {
  console.log("Started server");
});
