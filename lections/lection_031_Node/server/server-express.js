const express = require("express");
const app = express();
const port = 3000;

// localhost:3000/path

// get route by /
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get route by /movies

///telecommunication/modems

app.get("/telecommunication", (req, res) => {
  console.log(req.path, "req");
  res.json([{ a: 1 }, { a: 2 }]);
});

// app.get("/telecommunication/modems", (req, res) => {
//   res.json([{ a: 'modems-1' }, { a: 'modem-2' }]);
// });

// app.get("/telecommunication/smart", (req, res) => {
//   res.json([{ a: 'smart-1' }, { a: 'smart-2' }]);
// });

app.get("/telecommunication/:product", (req, res) => {
  console.log(req.params.product, "params");

  const { product } = req.params;

  res.json([{ a: product + 1 }, { a: product + 2 }]);
});

app.get("/telecommunication/:product/:id", (req, res) => {
  console.log(req.params, "params");

  const { product } = req.params;

  res.json({id: 12,  title: "apple" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
