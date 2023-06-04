import pubSub from './pubsub.js';

export default class Basket {
    products = [];

    addToBasket(product) {
        console.log('-------- call addToBasket -------');
        this.products.push(product);
        this.notify('add', product);
    }


    remove(product) {
        const index = this.products.indexOf(product);

        if (index >= 0) {
            this.products.splice(index, 1);
            this.notify('remove', product);
        } 
    }


    notify(event, product) {
        pubSub.publish(`basket:${event}`, product); // exmp: 'basket:add'
    }
}

console.log('---starting module Basket -----');
