const express = require("express");

const app = express();
const port = 9001;

app.use((req, res, next) => {
  console.log(req.headers);

  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); //('key', 'value')
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); //('key', 'value')
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  res.setHeader("Access-Control-Max-Age", "60");
  res.setHeader("Access-Control-Expose-Headers", "Barrer");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/test", (req, res) => {
  console.log(req.query, "query");
  res.status(200).json({ message: "okay" });
});

app.post("/test", (req, res) => {
  res.status(200).json({ message: "okay post    " });
});

app.put("/test", (req, res) => {
  res.setHeader("Barrer", "token payload");
  res.status(200).json({ message: "okay put    " });
});

app.listen(port, () => {
  console.log("Started server");
});
