const express = require("express");
const app = express();
const port = 3000;

// get route by /
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// get route by /movies
app.post("/movies", (req, res) => {
  res.json([{ a: 1 }, { a: 2 }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
