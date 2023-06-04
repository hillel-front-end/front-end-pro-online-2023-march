import pubSub from "../pubsub.js";
import Sender from "./sender.js";

class ViberSender extends Sender {
  constructor() {
    super();
    pubSub.subscribe("basket:add", (...arg) => {
      console.log("---- viber subscriber ------");
      this.notifyAdd(...arg);
    });
    pubSub.subscribe("basket:remove", this.notifyRemove);
  }

  notifyAdd(...args) {
    // console.log(args, 'args');
    const product = args[0];

    const viberStyleProduct = {
        viberTitle: product.title,
        viberPrice: product.price,
        viberId: product.id
    }

    super.notifyAdd(viberStyleProduct);

  }
}

console.log("---starting module Viber -----");

new ViberSender();
