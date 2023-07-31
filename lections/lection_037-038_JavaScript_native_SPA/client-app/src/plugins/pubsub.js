export default class PubSub {
  subscribers = {};

  subscribe(event, listener) {
    const subscribers = this.subscribers;

    if (!subscribers[event]) {
      subscribers[event] = [listener];
    } else {
      subscribers[event].push(listener);
    }
  }


  publish(event, ...args) {
    const listeners = this.subscribers[event];

    if (!listeners || !listeners.length) {
      return;
    }

    listeners.forEach((listener) => listener.apply(null, args));
  }
}





