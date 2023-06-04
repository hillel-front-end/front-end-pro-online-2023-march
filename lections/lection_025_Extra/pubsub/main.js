import Basket from './basket.js';
import './subscribers/telegram.js';
import './subscribers/viber.js';



/*
  { title: "Harry Potter", price: 22 },
  { title: "Star Wars", price: 6 },
  { title: "Avatar", price: 16 },
  { title: "Terminator", price: 8 }

*/

function main() {

    console.log('main')
    const basket = new Basket();


    basket.addToBasket({ title: "Harry Potter", price: 22, id: 1 });
}


main();