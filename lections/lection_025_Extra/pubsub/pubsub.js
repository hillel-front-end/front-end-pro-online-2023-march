class PubSub {
  subscribers = {};

  subscribe(event, listener) {
    const subscribers = this.subscribers;

    if (!subscribers[event]) {
      // if i first
      subscribers[event] = [listener];
    } else {
      // if i second
      subscribers[event].push(listener);
    }
  }

  // unsubscribe -- HT

  publish(event, ...args) {
    const listeners = this.subscribers[event];

    if (!listeners || !listeners.length) {
      return;
    }

    listeners.forEach((listener) => listener.apply(null, args));
  }
}

console.log('---starting module PubSub -----');


export default new PubSub();
