function set(y) {
    y = 1;
}

var x = 0;

set(x);

console.log(x); // undefined | 0 | 1


// ----------

function addFruit(basket) {
    basket[0] = "Apple";
}

var fruits = [];

addFruit(fruits);

console.log( fruits[0] ); // apple | undefined | [] || NaN

// 

// ------------ 

function makeFruit(basket) {
    basket = [ "Apple" ];
}


var fruits = [];

makeFruit(fruits);


console.log( fruits[0] ); // undefined | 0 |



// ------------ 


var foo = 1; 

function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 

    console.log(foo); 
} 

bar(); // 10 | 1 | u


// ----------

var a = 1; 

function b() { 
    a = 10; // 1 - without var, 2 -- with var
    return; 
    function a() {} 
} 

b(); 

console.log(a);


// ----------


var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
  };


setTimeout(() => user.sayHi(), 1000); // Error  | object | Вася 


// -------------

var arrow = () => console.log(this, 'this from arrow');

const obj = {
    toDo: function() {
        arrow();

        (function a1() {
            console.log(this, 'this inside a1');
        })();

        console.log(this, 'this inside toDo');
    }
}

obj.toDo();