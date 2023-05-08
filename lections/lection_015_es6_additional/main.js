// var , let, const

// function foo(params) {
//     /*
//         function todo() {

//         }
//     */

//     console.log(a3, 'a'); // error -- deed zone

//     let a3 = 2;

//     {
//         let a1 = 2;
//     }

//     var a = 1;

//     cosnsole.log(a1, 'a1'); // error -- out of block scope

//     todo()

//     function todo() {

//     }
// }

// console.log(a, 'a');

// -------------------------------

const SET_USER_VALUE = "SET_CAR_VALUE_2";

const mutations = {
  SET_USER_NAME: "SET_USER_NAME",
};

const obj = {
  name: "valera",
  [1 + 1]: "foo",
  [SET_USER_VALUE]() {
    console.log("setting user value.. SET_USER_VALUE");
  },
  [mutations.SET_USER_NAME](name) {
    this.name = name;
  },
  setCarValue() {
    console.log(".. setUserValue ..");
  },
};

obj[1 + 1] = "foo3";

obj[SET_USER_VALUE]();
obj[SET_USER_VALUE]();
obj[SET_USER_VALUE]();
obj[SET_USER_VALUE]();

console.log(obj, "obj");

obj.setCarValue();
obj.setCarValue();
obj.setCarValue();
obj.setCarValue();

obj[mutations.SET_USER_NAME]();

console.log(obj[mutations.SET_USER_NAME], "obj[mutations.SET_USER_NAME]");

// --------------------------- default params ---------

function sum(a = 4, b = 5, c = {}, d = []) {
  //  a = a || 4;
  //  b = b || 5;
  console.log(a + b);
}

sum(1, 2); // 3
sum(); // 9
// console.log(a, b);

const arrSum = (list = []) => list.reduce((accum, item) => accum + item, 0);

const result = arrSum([1, 2, 3]);

console.log(result, "result");

if (result) {
  console.log("111");
}

// ---------------- destructions ---------------

// --- array

const mass = [1, 2, 3, { name: "valera" }, ["aaaaa"]];

// const first = mass[0];
// const second = mass[1];
// const name = mass[3].name;

const [first, second, , obj4, arr] = mass;

const [a] = arr;

console.log(a, "a");

console.log(first, second, obj4);

// -- object

const person = {
  name: "Valera",
  lastName: "Ternavsky",
  child: {
    name: "Teona",
    age: "1.2",
  },
};

// const firstName = person.name;

// const { lastName, name: firstName, child: { age, name: childName } } = person;

// console.log(lastName, "lastName");
// console.log(firstName, "firstName"); // const firstName = person.name;
// console.log(child, "children");

// console.log(age, 'age'); // person.child.age
// console.log(childName, 'childName')

// ------------


// ---- order arguments 
/*

const person4 = {
  firstName: "Valera",
  lastName: "Ternavsky",
  age: 12,
};
const fullInfo3 = getFullInfo(firstName, lastName, age);

console.log(fullInfo3, 'fullInfo3'); 

*/

const getFullInfo = ({ lastName, firstName, age }) => {
  // let { firstName, lastName, age } = person;
  return `firstName = ${firstName}, lastName = ${lastName}, age = ${age}`;
};


const fullInfo4 = getFullInfo({
  firstName: "Valera",
  age: 12,
  lastName: "Ternavsky",
});

console.log(fullInfo4, "fullInfo3");


// ---------

const getFullInfo5 = () => {
  const firstName = "Valera";
  const lastName = "Tern";
  const age = 12;

  const sum = () => 1 + 1;

  return {
    firstName,
    lastName,
    age,
    sum,
  };
};

const { sum: sum5, firstName: firstName5, ...info } = getFullInfo5();

console.log(firstName5, "firstName5");

// -------------- rest, spread ------------------

// --- rest

function todo3(arg1, arg2, ...args) {
  // ...var ==> [1, 2, 3]
  //   console.log(arg1, "arg1");
  //   console.log(arg2, "arg2");
  //   console.log(args, "args");
  // console.log(args);
}

// todo3(1, 2, 3);
todo3(1, 2, 3, 4, 5);

const person2 = {
  name: "Valera",
  lastName: "Ternavsky",
  child: {
    name: "Teona",
    age: "1.2",
  },
};

// desct + rest

// const { ...person3 } = person2;
const { child, ...person3 } = person2;
// console.log(child, "child");
// console.log(person3, "person3");

// todo3(1, 2);

// ---- spread

const args = ["Valera", "Ternavsky", 1];

function getFullName(name, lastName) {
  return `${name} ${lastName}`;
}

function getFullName(...info) {
  const [firstName, lastName, age] = info;
  //   console.log(info, "info");
  return `${name} ${lastName} ${age}`;
}

// fullName = getFullName(args[0], args[1]);
fullName = getFullName(...args);

// console.log(fullName, "fullName");
