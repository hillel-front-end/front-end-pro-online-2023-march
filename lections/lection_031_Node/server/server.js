const http = require("http");
// const _ = require("lodash");

// console.log(_, "lodash");
// const { toDoSomesing2 } = require("./helper");

// console.log(toDoSomesing2, "toDoSomesing2");

// toDoSomesing2();
// alert('aaaaa')
// console.log(location)

// ----------------------
const hostname = "127.0.0.1";
const port = 3000;

const getMovies = () => {
  return ['some movies - 1', 'some movies - 1']
};


const getVacansies = () => {
  return ['some vacansies -1', 'some vacansies -2']
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url, 'req');
  res.setHeader("Content-Type", "application/json");

  const path = req.url.slice(1);

  if (path === 'vacnsies') {
    res.end(JSON.stringify(getMovies()));
  } else if (path === 'movies') {
    res.end(JSON.stringify(getVacansies()));
  }

  res.end('Not Found');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
