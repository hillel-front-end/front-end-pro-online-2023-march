import './input.scss';
import Component from "@/plugins/component";
import { AsNode } from "@/common/decorators";


class Input extends Component {
    constructor(...props) {
        super(...props);
    }

    onChangeHandler() {
        console.log(123);
    }

    // innerHTML = string vs append(node)
    /// createElement vs Template String


    @AsNode
    getTemplate() {
        return `
            <div class="mb-3">
                <label
                  for="login"
                  class="form-label"
                >${this.props.label}</label>
                <input
                  type="${this.props.type}"
                  id="${this.props.id}"
                  name="${this.props.name}"
                  class="form-control login"
                  aria-labelledby="passwordHelpBlock"
                />
            </div>
        `;

    }

    bindEvent(node) {
        node.querySelector('input').addEventListener('change', this.onChangeHandler)
        return node;
    }

    render() {
        return this.bindEvent(this.getTemplate());
    }
}
export default Input;


// const div = document.createElement('div');
// div.className = 'mb-3';
//
// const input = document.createElement('input');
// input.id = this.props.id;
// input.className = 'form-control login';
//
// div.append(input);
//
// input.addEventListener('change', this.onChangeHandler)
//
//
// return div;