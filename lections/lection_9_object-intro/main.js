/*
  1.  reference vs primitive type
  2.  object intro + diff from array
  3.  operation with object (crud), key as string, return  several things {..}
  4.  object methods
  5.  operator in, for - in
  6.  example assignObject (copy)
  7.  example recursive with object ?? HW
  8.  own: forEach, map, filter, make reduce, reduceRight 

*/

//   1.  reference vs primitive type

// null, undefined, string, boolean, number, Symbol - primitive

// array, function, object -- link

let a = 12;
let b = a;

console.log(a, b, "a, b");
b = 20;
console.log(a, b, "a, b");

let mass = ["abs"];
let arr = mass;

console.log(mass, arr, "mass, arr");

arr[4] = "Mutation";

console.log(arr, "arr");

console.log(mass, "mass");

function arrayFilleTwoDem(array, countRows, countCols) {
  for (let i = 0; i < countRows; i++) {
    array[i] = new Array();

    for (let j = 0; j < countCols; j++) {
      array[i][j] = Math.floor(Math.random() * 10);
    }
  }
}

// let arr2 = [];

// console.log(arr2, "arr2");
// const row = 5;
// arrayFilleTwoDem(arr2, row, 5);

// console.log(arr2, "arr2");
// const valera = [];
// arrayFilleTwoDem(valera, 6, 6);

// console.log(valera, "valera");
// console.log(arr2, "arr2");

// ------------------ object ----------------------------
function fetchTeamFromServer() {
  return [
    [25, "a"],
    ["b", 24],
    ["c", 20],
  ];
}
const name_index = 0;
const age_index = 1;

const team = fetchTeamFromServer();
const age = team[0][name_index];

console.log(age, "age");

/*
.box {
    width: 100px;
    height: 200px;
    backgroung-color: red;

}

*/

// -------------- create

// const box = {
//   width: "100px",
//   height: 200,
//   backgroungColor: "red",
// };

/*
const person = {
    key: value
};

*/

// ---------- read object.key ==> value

const arr4 = ["a", "b "];

function eat(key) {
  console.log(".....", key);
}

const player = {
  name: "Valera",
  patronim: "Bbbbb",
  age: 28,
  isMarried: false,
  children: [{ name: "Alex" }],
  obj: {
    someKey: 1111,
  },
  run: function (key) {
    console.log("running " + player.name, key);
    return 200;
  },
  playerEatting: eat,
};

// console.log(arr4[0]);

console.log(player.name, "name");
// console.log(player.foo, "foo"); // undefined

console.log(player.run(), "run"); // methods

// console.log(eat, "eat");
// console.log(player.playerEatting === eat);

eat();
player.playerEatting();

let key = "0";

// console.log(arr4[key]);

const USER_NAME_KEY = "name";

// console.log(player.age);
// console.log(player["age"]);
// console.log(player[USER_NAME_KEY]);

function getDataAttr() {
  return "cansel";
}

const action = getDataAttr();

const actions = {
  cansel: function () {
    console.log("Close modal");
  },
  save: function () {
    console.log("save modal payload");
  },
};

console.log(actions[action], action);

actions[action]();

// actions.action  ---> undefined

/// --------------- write, create: object.key = value --------------

console.log(player, "player");

// player.name = "Pety";

// player["name"] = "Pety";
player[USER_NAME_KEY] = "Pety";

console.log(player.foo, "player");

player.foo = "some value";

console.log(player, "player");

// ----------- delete

delete player.foo;

console.log(player, "after delete");

// ----------- check key => in ---------

const isExist = "foo" in player;

console.log(isExist);

// if (player.age) {

// }

// ------- loop ------------

// for(let key in object) {

// }

for (let key in player) {
  if (typeof player[key] === "function") {
    player[key](key);
  }
}

// ----------------------- copy ----------

// let secondPlayer = player;

// console.log(secondPlayer, "secondPlayer");
// console.log(player, "player");

function assignObject(currentObj) {
  const newObject = {};

  for (let key in currentObj) {
    console.log(key, currentObj[key]);

    newObject[key] = currentObj[key];
    // newObject.key = currentObj[key]; // bad
  }

  console.log(newObject, "newObject");

  return newObject;
}

const secondPlayer = assignObject(player);

secondPlayer.name = "Valera";

secondPlayer.children.push({ name: "Suzi" });

console.log(player, "player");
console.log(secondPlayer, "secondPlayer");
