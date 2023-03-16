/*
Lection 1 - JavaScript Intro
  * JS Введение, jsfiddle, codepen
  * підключення скриптів
  * базові команди введення-виведення
  * математичні операції
  * створення, найменування та використання змінних
  * типи(Number, String) + typeof
  * перетворення типів (явне, неявне), parseInt, NaN
*/

// ------ интструменты для отображений значений переменных или выражений --------

console.log(1);
console.log(2);

console.log('Этот контет отобразится в консоли разработчика');
document.write('Этот контет отобразится в body после тега script');


// -------------- создание имен переменным -------------
// 1value, first-name, <-- неправильные имена переменным

age = 18; // правильно !
firtName = 'Valera'; // правильно !
fist_name = 'Valera'; // правильно !
$login = 'user-login'; // допустимо!


// ------------ Types -------------------

// Number 

a = 12; //Number
b = 12.5; // Number 

// Java a:Integer = 12;
// Java  b:Float = 12.5;

//  --- String ----

// Java a: String = 'Valera';

a = "12";   // string 
b = '13';  // string 
c = `14`; // string


// console.log(a, b, c);
// console.log(a);

// ------ мат опер ------


console.log(12 + 12, 'sum');
console.log(12 - 12, 'diff');
console.log(12 * 12, 'mul');
console.log(12 / 12, 'div');

console.log(12 * (1 + 2));
console.log(1 + 12 * 2);

a = 1;
b = 2;


console.log(a + b, 'a + b');

// ------------------------ перетворення типів (явне, неявне), parseInt, NaN -----------

value = '12'
value0 = 'abc';
value2 = 10;

console.log(value + value2); // конкатенация number + string ==> string + string => string


            //abc' + 10 == 'abc10', string + number ==> string 
console.log(value0 + value2); 

//result = 'abc' + 10 == 'abc10', string + number ==> string 
result = value0 + value2;
console.log(result, 'result');


// !!! Правило: Мат. операции отличительная от сложения, преобразует к числу 


b1 = 10; // number
b2 = '13'; // string 

result1 = b2 - b1;//  string - number => number - nuber => number
result2 = b2 * b1;
result3 = b2 / b1;

console.log(result1, 'result1 = b2 - b1;');
console.log(result2, 'result2 = b2 * b1;');
console.log(result3, 'result3 = b2 / b1');


a = '12'
b = '10'

res = a * b; // => string * string ==> number * number ==> 120 число
console.log(res, 'res');


// ---------------  Конкатенация 2ух и более переменных через разделитель -----------------------
firstName = 'Valera';
sureName = 'Vadimovich';
lastName = 'Ternavsky';

fullName = firstName + ' ' + lastName; //string + string +  string ==> string  

fullName2 = firstName + ' - ' + sureName + ' - ' + lastName;

         // 'Valera' + ' ' +  'Vadimovich' + ' ' +'Ternavsky' + ==> 'Valera Vadimovich Ternavsky'

console.log(fullName, 'fullName');
console.log(fullName2, 'fullName2');

//----------------- NaN -------------


v1 = 123;
v2 = 'hello';

console.log(typeof v2, 'typeof v2');

resultValue = v1 * v2;//   number *  string => number * NaN -- Not A Number;

console.log(resultValue, 'resultValue');

// ------------- преобразование при помощи parseInt() -----------------

console.log('----------------------');

v3 = '123';
v4 = v3;
v5 = parseInt(v3);


console.log(v3, 'v3');
console.log(v4, 'v4');
console.log(v5, 'v5');


console.log(v3, '---v3 end---')

// ------------- преобразование при помощи унарного + -----------------

console.log(+v3, '+v3');/// +'123' => 123

v5 = +v3;

console.log(v5, 'v5 = +v3');

// ------------- разница преобразования + от parseInt -------------

console.log('/---------------');
v6 = '123-abc';

prepared1 = parseInt(v6); // 123
prepared2 = +v6;

console.log(prepared1, 'prepared1 - parseInt');
console.log(prepared2, 'prepared2 -- unar');


// console.log(parseInt('123456'), '123456');
//---------------------------------------------------


document.write('Hello' + '<br />');
document.writeln('world');