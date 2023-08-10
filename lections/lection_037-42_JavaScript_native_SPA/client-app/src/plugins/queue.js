export default class Queue {
    queue = [];

    dequeue() {
        return this.queue.shift();
    }

    enqueue(task) {
        this.queue.push(task);
    }

    isEmpty() {
        return this.queue.length === 0;
    }

}