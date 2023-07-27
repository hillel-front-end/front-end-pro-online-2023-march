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