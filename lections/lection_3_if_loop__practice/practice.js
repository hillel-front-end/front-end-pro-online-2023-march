/*
    Ввести с клавиатуры 2 числа a и b (где a <<< b). 
    Запустить цикл перебора от a до b. 
    Вывести в консоль квадраты чётных чисел.
    Возвести в 5тую степень четные числа при помощи цикла do{} while()

*/

let a = +prompt('Input A');
let b = +prompt('Input B');

// console.log(typeof a, typeof b, 'a --- b');
const isValidRange = !isNaN(a) && !isNaN(b); 


if (isValidRange) {
    console.log('WOrk number');
    // a ---- 10
    // b --- 5

    if (a > b) {
        let temp = a;
        a = b;// a = 5
        b = temp;// b = 5
    }

    // console.log('a ==> ', a);
    // console.log('b ===> ', b);

    // 



    for(let i = a; i <= b; i++) {
    //    if (i % 2 === 0) {
    //     console.log(i * i, 'i');
    //    }
        if (i % 2 != 0) continue;

        console.log('i---> squre', i * i);
        
        let MAX_COUNT = 3;
        let total = 1;
        // let j = 1;

        // do {
        //     total *= i; // total = total * i;
        //     j++;
        // } while(j <= MAX_COUNT)

        do {
            total *= i; // total = total * i;
        } while(--MAX_COUNT) // 2 -> 1 -> 0

        console.log('total ==> ' + total + ' ' + 'i ==> ' + i);
        
    }
} else {
 console.log('Range invalid');
}