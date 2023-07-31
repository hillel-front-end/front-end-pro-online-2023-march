export default class Observer {
    observers = []

    subscribe(cb) {
        this.observers.push(cb);
    }

    unsubscribe(cb) {
       this.observers = this.observers.filter(currentCb => currentCb !== cb);
    }

    broadcast(...args) {
        this.observers.forEach(cb => cb(...args))
    }
}