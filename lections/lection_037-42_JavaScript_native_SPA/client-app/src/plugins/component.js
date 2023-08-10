export default class Component {
    props = {};

    constructor(...props) {
        if (typeof this.render !== 'function') {
            throw new Error('Component should implement render() method');
        }

        if (props.length) {
           this.setProps(...props)
        }

    }

    setProps(props) {
        // if (pr)
        this.props = {
            ...this.props,
            ...props
        }
    }


    replaceSlot(template, ...slots) {
        for (const { key, replacer } of slots) {
            const node = replacer()


            if (Array.isArray(node)) {
                template.querySelector(key).replaceWith(...node);
                continue;
            }

            template.querySelector(key).replaceWith(node);
        }

        return template;
    }


    [Symbol.toPrimitive]() {
        console.log(this, 'this');
        return this.render()
    }
}