function foo() {
  // LE = {}
  var g = 2; //var let const

  console.log(goods, "goods");

  return function () {
    g;
  };
}

// foo();

// console.log(g, 'g');

/// ------------------

const iterable = {
  a1: "aaa",
  a2: "bbb",
  a3: "ccc",
  a4: "ggg",
  a5: "kkk",

  //   [Symbol.iterator]() {
  //     const keys = Object.keys(this);
  //     const self = this;
  //     //   console.log(keys, "keys");
  //     // console.log(this, "this");
  //     return {
  //       finish: keys.length,
  //       current: 0,
  //       next() {
  //         if (this.current < this.finish) {
  //           const key = keys[this.current++];
  //           // console.log(key, "key");
  //           // console.log(self, "self");
  //           // console.log(this, "this");
  //           return { done: false, value: self[key] };
  //         }

  //         return { done: true, value: undefined };
  //       },
  //     };
  //   },
};

iterable[Symbol.iterator] = null;

console.log(iterable, "iterable");

// function objectIteration() {
//   const keys = Object.keys(this);
//   const self = this;
//   //   console.log(keys, "keys");
//   // console.log(this, "this");
//   return {
//     finish: keys.length,
//     current: 0,
//     next() {
//       if (this.current < this.finish) {
//         const key = keys[this.current++];
//         // console.log(key, "key");
//         // console.log(self, "self");
//         // console.log(this, "this");
//         return { done: false, value: self[key] };
//       }

//       return { done: true, value: undefined };
//     },
//   };
// }

// iterable[Symbol.iterator] = objectIteration;

Object.defineProperty(iterable, Symbol.iterator, {
  configurable: false,
  writable: false,
  value: function () {
    const keys = Object.keys(this);
    const self = this;
    //   console.log(keys, "keys");
    // console.log(this, "this");
    return {
      finish: keys.length,
      current: 0,
      next() {
        if (this.current < this.finish) {
          const key = keys[this.current++];
          // console.log(key, "key");
          // console.log(self, "self");
          // console.log(this, "this");
          return { done: false, value: self[key] };
        }

        return { done: true, value: undefined };
      },
    };
  },
});

delete iterable[Symbol.iterator];
iterable[Symbol.iterator] = null;

console.log(iterable, "iterable");

// -------------------

function* getNumber(n) {
  console.log(1);
  yield 10;

  console.log(2);
  yield 20;

  console.log(3);
  yield 30;
}

const iterator = getNumber(12);

// console.log(iterator, "iterator");

// console.log(iterator.next());

// console.log(iterator.next());

// console.log(iterator.next());

for (let value of iterator) {
  console.log(value, "value");
}

// -------

function* loop(arr) {
  console.log(1);
  for (let item of arr) {
    console.log(2);
    yield item;
    console.log(3);
  }
}

const iterator2 = loop(["aaa", "bbb", "cc"]);

// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

// ---------------------

function* getId() {
  let id = 0;

  //   while (true) {
  //     yield id++;
  //   }
  let isNext = yield id + 2;

  console.log(isNext, "isNext");

  yield isNext + 10;
}

const iterator4 = getId(123);

console.log(iterator4.next());

// const isNext = confirm();
isNext = 1;

console.log(iterator4.next(isNext));
console.log(iterator4.next());

// ---------------------

// const fetchAllProducts = () => {
//   console.log("--- 2 send requiest ----");
//   setTimeout(() => console.log(" 3 ------call setTimeout -------"), 3000);
//   console.log("--- 4 get payload  ----");
//   return [];
// };

// function* renderProductsTemplate() {
//   console.log("---- 1 call renderProductsTemplate ---");
//   const response = fetchAllProducts();
//   console.log("-------- 5 finish with data ---------", response);
// }

function* renderProductsTemplate() {
  console.log("---- 1 call renderProductsTemplate ---");
  setTimeout(() => console.log(" 2 ------call setTimeout -------"), 3000);
  yield;
  console.log("-------- 3 finish with data ---------");
}

var iterator5 = renderProductsTemplate();

// iterator5.next();

// iterator5.next();

/// ---------------------------

const smsNotify = () => {
  console.log("sendiong smsNotify");
  return true;
};
const telegraNotify = () => {
  console.log("sendiong telegraNotify");
  return false;
};

const viberNotify = () => {
  console.log("sendiong viberNotify");
  return true;
};

function executorQueue(tasks, onTaskSuccess, onTaskReject) {
  function* excutor() {
    while (tasks.length != 0) {
      console.log(tasks, "tasks");
      const task = tasks.shift();
      const result = task();

      if (result) {
        onTaskSuccess(result);
      } else {
        onTaskReject(result);
      }

      yield result;
    }
  }

  return excutor();
}

const tasks = [smsNotify, telegraNotify];

var iterator6 = executorQueue(
  tasks,
  (result) => {
    console.log("--success", result);
  },
  (result) => {
    console.log("--reject", result);
    tasks.push(viberNotify);
  }
);

iterator6.next();
iterator6.next();
iterator6.next();

// console.log(iterator6, "iterator6");

// ----------------- Map Set -----------------

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

const obj = {
  key: 12,
};

const hashTable = [
  ["key-1", 1],
  ["key-2", 12],
];

function cacheble(cb) {
  const map = new Map();

  return function (n) {
    if (map.has(n)) {
      return map.get(n);
    }

    map.set(n, cb(n));
  };
}

// ----- Map --------
const initial = [
  ["key-1", 1],
  ["key-2", 12],
];
// const hashTable2 = new Map(initial);
const hashTable2 = new Map(Object.entries({ key1: 1, key2: 12 }));

console.log(hashTable2, "---- init hashTable2");

const key3 = "key-3";

// ------ write ----
hashTable2.set(key3, 123);
console.log(hashTable2, "hashTable2");

hashTable2.set(key3, 222);
console.log(hashTable2, "hashTable2");

hashTable2.set("key-4", 3333);

// ------ read ----

const value = hashTable2.get(key3);
console.log(value, "value");

// ----

const isPresent = hashTable2.has("key-2");
console.log(isPresent, "isPresent");

// ----- delete

hashTable2.delete(key3);

// ---- iterator ---

for (let [key, value] of hashTable2) {
  console.log(key, value);
}

/// -----

console.log(hashTable2.values(), "values");

const iter6 = hashTable2.values();

console.log(iter6.next().value);

console.log(hashTable2.keys(), "keys");

// ------------ Set --------------

const structSet = new Set();

var products = [
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

console.log(structSet, "structSet");

products.forEach((product) => {
  structSet.add(product.name);
});

console.log(structSet.values(), "values");
console.log(structSet.keys(), "keys");
console.log(structSet.has("sprites"));
