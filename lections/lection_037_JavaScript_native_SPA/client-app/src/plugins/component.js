export default class Component {
    constructor() {
        if (typeof this.render !== 'function') {
            throw new Error('Render should be present');
        }
    }

    [Symbol.toPrimitive]() {
        console.log(this, 'this');
        return this.render()
    }
}