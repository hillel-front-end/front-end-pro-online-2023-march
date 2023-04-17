// -------------- Повторення (&&,|| ДЗ, та приоритетність) ----------------

// a1 = 1;
// a2 = 2;
// a3 = 3;

// console.log( || (a && b) ); // true || ( true && true)
// 1 || 2 && 3 => 1 || 3 => 1

// console.log(a && b);// 

// +undefined => NaN 
// +null => 0
// +'132' => 123
// false/true => 0/1
// "" => 0
// 'hello' -> NaN

// const v = +prompt();

// console.log(v, 'vaaaa');

//  ----------------- Math ------------------------



// ---------------------- isNaN, ! --------------------

let v = true;
console.log(true + true, '(true + true');
const l = isNaN(v);
console.log(l, 'l');


console.log(!'12', '------'); // true => false
console.log(!true, '!true');
console.log(!false, '!false');


// !(a && b) || c

// ------------- # 8 - if else else if -------------------------------


/*

if ( condtional ) {
    // body
}

*/

const flag = false;

// if (flag) {
//     console.log('work');
// }

const age = 11;

// if (age && age > 10) {
//     console.log('allow');
// }

/*

if ( condtional ) {
    // body
} else {

}

*/


if (age && age > 18) {
    console.log('allow');
} else {
    console.log('another fooo')
}


/*

if ( condtional ) {
    // body
} else if (conditional) {

} else if (conditional) {

} else {

}

*/

const time = 10;

if (time < 10) {
    console.log('good morning');
} else if (time < 20) {
    console.log('good day');
} else {
    console.log('goodbay');
}

anotherConditional = true


if (time > 10 && time <= 20) {
    console.log('good day');

    if (anotherConditional) {
        console.log('work');
    }

    if (anotherConditional) {
        console.log('work');
    }
}

// ------------- # 9 - loop do{}while(), while() {} -------------------------------

// do {
    // body
// } while(conditional)

// let i = 5;
// const MAX_COUNT = 4;
// do {
//     console.log('user input value, please');
//     // i = i + 1;

// } while(i <= MAX_COUNT)

// do {
//     console.log('DO - while: user input value, please', i);
//     // i = i + 1;
// } while(i++ && i <= MAX_COUNT)

/*

while(cond) {
 body
}

*/



// while(i <= MAX_COUNT) { // 5 <= 4 =>> false
//     // body
//     console.log('WHILE - user input value, please', i);
//     i++;
// }



// 1 - зона переменных
// 2 - зона условия выполнеия\выхода из цикла
// 3 - зона увеличения счетчика 
// 4 - зона выполнения тела цикла(если зона 2 == true)


// for(1; 2; 3) {

// }


// for(let j = 1; j <= 3; j++) {
//     console.log('Loop For - user input value, please', j);
// }

// for(let j = 1, MAX_COUNT = 3; j <= MAX_COUNT; j++) {
//     console.log('Loop For - user input value, please', j);
// }
 
// 1 --> 2 (true) --> 4       | j -- 1
// 3 --> 2 (true) --> 4       | j -- 2
// 3 --> 2 (true) --> 4       | j -- 3
// 3 --> 2 (false) --> finish | j -- 4

// ------------- # 10 - loop for, nested -------------------------------


for(let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
        for(let j = 1; j <= 4; j++) {
            document.write(' * ')
        } 
    } else {
        for(let j = 1; j <= 5; j++) {
            document.write(' * ')
        } 
    }

    document.write('<br />')
} 







