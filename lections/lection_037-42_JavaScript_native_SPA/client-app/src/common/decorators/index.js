export const AsNode = function (value, { kind }) {

    if (kind === 'method') {
        return function (...arg) {
            const template = document.createElement('template');
            const result = value.apply(this, arg);

            if (typeof result === 'string') {
                template.innerHTML = result;
            }

            return template.content.firstElementChild;
        }
    }
}

export const BindEvent =  function (value, { kind }) {
    if (kind === 'method') {
        return function (...arg) {
            const node = value.apply(this, arg);

            if (typeof this.bindEvent === 'function') {
                this.bindEvent(node)
            }

            return node;
        }
    }
}


export const SaveContainer = function(value, { kind }) {
    if (kind === 'method') {
        return function (...arg) {
            this.$container = value.apply(this, arg);

            return this.$container;
        }
    }
}