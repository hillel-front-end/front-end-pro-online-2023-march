// ----------------------- Closure ---------------------------

// const arrowOutside = () => {
//   console.log(this, "this");
// };

// const obj = {
//   toDo: function () {
//     // const arrow = () => {
//     //   console.log(this, "this");
//     // };

//     arrowOutside();

//     // arrow();
//   },
// };

// obj.toDo();

function foo() {
  let a = 12;
  let b = 13;

  return function () {
    console.log(a, "a");
    console.log(b, "b");
  };
}

// foo();
const func = foo();

func();

function icrement() {
  let index = 0;

  return function () {
    index += 1;

    // console.log(index, "index");
    return index;
  };
}

const counter = icrement();

counter();
counter();
counter();

// ----------------------
const counter2 = icrement();

counter2();
console.log(counter2(), "counter2");

console.log(counter(), "counter");

// const icrement = () => {
//   let index = 0;

//   return () => (index += 1);
// };
// ----------------------- Iterator ---------------------------

function iterator(collection) {
  const length = collection.length;
  let position = 0;

  const hasNext = () => position < length;
  const hasPrev = () => position > 0;

  const next = () => {
    let elem = collection[position];

    if (!hasNext()) {
      return null;
    }

    position += 1;

    return elem;
  };

  const previos = () => {
    if (!hasPrev()) {
      return null;
    }

    position -= 1;
  };

  const getCurrent = () => {
    console.log(position);
  };

  const reset = () => {
    position = 0;
  };

  return {
    next: next,
    previos: previos,
    getCurrent: getCurrent,
    reset: reset,
  };
}

const tool = iterator(["pact-1", "pict-2", "pict-3"]);

console.log(tool, "tool");

console.log(tool.next());
console.log(tool.next());

console.log(tool.next());

// console.log(tool.rest());

// ----------------------- myBind + bind  ---------------------------

function sum(a, b) {
  console.log(arguments, "arg");
  console.log(this, "this");
  return a + b;
}

const obj = {
  h: 12,
};

const obj2 = {
  k: 12,
};

// sum();
// sum.call(obj);

// sum.call(obj2);

// ------

function myBind(context) {
  const self = this;
  const outArgs = [].slice.call(arguments, 0);
  // arguments.slice(1)

  return function () {
    const localArg = [].slice.call(arguments);
    return self.apply(context, outArgs.concat(localArg));
  };
}

sum.myBind = myBind;
sum = sum.myBind(obj, 1, 2);

// sum = myBind(obj, sum);
// sum.call(obj, 1, 2);
// sum.apply(obj2, [1, 2]);

// sum(1, 2);
// sum(2, 4);

// sum = sum.bind(obj, 1, 2);

// sum(3, 4);
// sum("hhhh", "bbbbb");
// sum(1, 2);

// ----------------------- lost context + solution with bind  ---------------------------

var obj3 = {
  k: 17,
  l: 1,
  mul: function () {
    console.log(this, "this");
    return this.k * this.l;
  },
};

console.log(obj3.mul());

function doFunction(cb, a, b) {
  // cb = obj3.mul.bind(obj3)
  // cb = obj3.mull
  console.log(cb(a, b), "cb");
}

// mul = obj3.mul.bind(obj3);

// doFunction(obj3.mul.bind(obj3));

// ----------------- Data structure: Hash table ------------------------------------

var goods = [
  { name: "sprite", price: 70 },
  { name: "juice", price: 100 },
  { name: "cola", price: 82 },
  { name: "sprite", price: 50 },
  { name: "soda", price: 30 },
  { name: "fanta", price: 70 },
  { name: "soda", price: 70 },
  { name: "juice", price: 70 },
  { name: "sprite", price: 70 },
];

const hashTable = {};

// obj4["foo"] = 12;
// obj4["foo"] = 13;

// obj4["valera"] = "aaaa";

for (let good of goods) {
  let count = 1;

  if (hashTable[good.name]) {
    count = hashTable[good.name] + 1;
  }

  hashTable[good.name] = count;
}

console.log(hashTable, "hashTable");
