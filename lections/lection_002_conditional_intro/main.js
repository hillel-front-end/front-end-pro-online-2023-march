/*
    1. повторення
    2. alert, confirm, prompt
    3. smart operation, ++, --, %
    4. review var, let, const
    5. null, undefined
    6. bool, isNaN
    7. logical operators [>,<, >=, <=, ==, ====, !] 
    8. таблиця істиності (&&, ||)
    9. if else else if 
    10. тернарный оператор, switch ? // at home
    11. loop do{}while(), while() {}
    12. for(){}, comtinue, breake, infinity
    13. консоль розробника, debugger

*/
// -------------- № 1 - Повторення -----------------------






// -------------- № 2 - alert, confirm, prompt -----------------------


// alert('Hello world');

// answer = confirm('');

// console.log(answer, 'answer');

// answer = +prompt('Input value'); // '28' => 28

// --------------------
// answer = prompt('Input value');
// answer = parseInt(answer);

// answer = parseInt(prompt('Input value'));
// --------------------

// answer = prompt('Input value'); // '28' => 28

// console.log(answer, 'before answer');

// answer = +answer;

// console.log(answer, 'after answer');



// console.log(typeof answer, 'answer');

// -------------- № 3 -  smart operation, ( ++, --), % -----------------------


result = 10;
        // 10
console.log(result, 'result - 1');

// result = result + 15;

// result += 15; // result = result + 15;
// result *= 15; 


// result = result + 1; // (1)
// result += 1; // (2)

// result++; // (3)

// ++result; // (4)

// incPost = result++;

// console.log(incPost, 'incPost');

// console.log(result, 'result - 2');

// ------------

incPreff = ++result;

console.log(incPreff, 'incPreff');

console.log(result, 'result - 3');

// console.log(incPost, 'incPost');



// ---------



div = 10 % 2;

console.log(div, 'div - 1');

div = 10 % 3;

console.log(div, 'div - 2');




// -------------- № 4 -  intro review var, let, const -----------------------

// console.log(b, 'b');// Error
// b = 12;
// b; // Error


// console.log(b, 'b');// Error

// console.log(a, 'a');
var a = 10;


// console.log(k, 'k'); //Error
let k = 20;
console.log(k, 'k');

let u;
console.log(u, 'u');


let l = 12;
l = 'Hello';

const PI = 3.14;

console.log(PI, 'PI');

// PI = 3.15;

const FULL_NAME = "VALERA";


console.log(PI, 'PI')


// q = 12;



// var o = 12;
// let o = 13;

// -------------- № 5 -  null, undefined -----------------------

let y;

console.log(y, 'y');

let y2 = null;

/*
  *********************ШПОРГАЛКА********************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0
   +""    ->  0      (пустая строка - 0)
   +"123" -> 123 (число в строке - число)
   +true\false -> 1\0
   +"abc" -> NaN (при ошибке результат NaN)
   +undefined -> NaN
  *****************************************************
*/



// -------------- № 6 -  Bool, Boolean() isNaN()  -----------------------

// true or false;

let isHidden = false;



/* 
********************ШПОРГАЛКА*********************************
============= Важно помнить преобразования к Boolean ===============
    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true
*****************************************************
*/

console.log(Boolean(" "), 'bool');// true

console.log(Boolean(""), 'bool');// false

// ------------- # 8 - таблиця істиності/перевірка на істеність [&& (усіх), || (хоча б одного)] -------------------------------

let w1 = 0;
let w2 = 0;
let w3 = 22;

// --------- && --------------

// false && false = > false
// true && false => false 
// false && true = > false
// true && true => true

let res = w1 && w2 && w3 ; // 'Valera' && 29 => true && true => true

console.log(res, 'res');

console.log(Boolean(res), 'Boolean - res');

// -------------------
// false || false = > false
// true || false => true 
// false || true = > true
// true || true => true

let res2 = w1 || w2 || w3;

// let res3 = w1 && w2 || w3;

console.log(Boolean(res), 'Boolean - res - 2');

// -------------- № 7 - logical operators [>,<, >=, <=, ==, ===, !]   -----------------------


let a1 = '12';
let a2 = 12;


// let res3 = a1 > a2;
//     res3 = a1 < a2;
//     res3 = a1 >= a2
//     res3 = a1 <= a2;
//     res  = a1 == a2;



let res3 = a1 == a2; // '12' == 12 => string == number =>  number == number => true
console.log(res3, 'res3');

let res4 = a1 === a2; // '12' === 12 => false
console.log(res4, 'res4');


console.log(a1 >= a2, 'a1 >= a2');

// ------------------------------------------------------------------

