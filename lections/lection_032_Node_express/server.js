const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const { error } = require("console");

require("dotenv").config();

const app = express();
const port = 3000;

console.log(process.env.ACCESS_TOKEN, "envi");

if (process.env.NODE_ENV === "production") {
  // ...app.
}
// localhost:3000/path
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

const validationToken = (token) => token && true;

app.use((req, res, next) => {
  console.log(req.path, "path");
  console.log("Hello from app.use");

  console.log(req.headers, "headers");
  const authToken = req.headers?.authorization?.split(" ")[1];

  const isValid = validationToken(authToken);

  if (!isValid) {
    res.status(401).json({ message: "asdsadasd" });
    return;
  }

  next();
  // req.foo = "aaaaaaa";
  // req.toDoSomeThing = () => {
  //   console.log("todo");
  // };
});

// get route by /
app.get("/", (req, res) => {
  console.log(req.foo, "foo");
  console.log("Hello from route", req.path);
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

  res.json({ id: 12, title: "apple" });
});

app.get("/users", (req, res) => {
  console.log(req.query, "query");

  const { minAge = null } = req.query;

  fs.readFile("./model/data.json", "utf-8", (error, data) => {
    let users = JSON.parse(data);

    if (minAge) {
      users = users.filter((user) => user.age >= minAge);
    }

    // res.setHeader('content-type', 'application/json')
    res.status(202).json(users);
  });

  // res.json(123123);
});

const readFile = (url, cb) => {
  fs.readFile(url, "utf-8", (error, data) => {
    const payload = JSON.parse(data);

    cb(payload);
  });
};

const findUserById = (id, users) => users.find((user) => user.id == id);

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(404).json({ message: `User Not Found ` });
  }

  readFile("./model/data.json", (users) => {
    const user = findUserById(userId, users);

    if (!user) {
      return res.status(500).json({ message: `User by ${userId} Not Found` });
    }

    res.json({ data: user });
  });
});

app.post("/user-add", (req, res) => {
  const { body } = req; // req.body

  const newUser = req.body.user;

  readFile("./model/data.json", (users) => {
    newUser.id = users[users.length - 1].id + 1;

    users.push(newUser);

    fs.writeFile("./model/data.json", JSON.stringify(users), (error) => {
      console.log(error, "error");
    });

    res.json({ message: "ok", id: newUser.id });
  });

  // res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
