import './signin.scss'
import Component from "@/plugins/component";
import Input from "@/common/components/Input/Input";
import { AsNode, BindEvent } from "@/common/decorators";
import {mutation_types, store} from "@/store/store";

export default class SignIn extends Component {
    credentials = {}


    onInputChangeHandler(event) {
        const { value, name } = event.target;
        this.credentials[name] = value;
    }

    async onClickHandler(event) {

        store.dispatch(mutation_types.SET_IS_LOADING, true);

        const { login, password } = this.credentials;

        let response;

        if (login && password) {
            response = await this.onSignIn()
        }


        setTimeout(() => {
            store.dispatch(mutation_types.SET_IS_LOADING, false);
        }, 1000)
    }


    async onSignIn() {
        const response = await (await fetch('http://localhost:9001/sign-in', {
            method: 'POST',
            body: this.credentials
        })).json();

        console.log(response, 'response');
        return response
    }

    updateTemplate(template) {
        const LoginInput = new Input({
            type: 'text',
            name: 'login',
            id: 'login',
            label: 'Login',
            onChange: this.onInputChangeHandler.bind(this)
        });

        const PasswordInput = new Input({
            type: 'password',
            name: 'password',
            id: 'password',
            label: 'Password',
            onChange: this.onInputChangeHandler.bind(this)
        });

        return this.replaceSlot(
            template,
            { key: 'slot[name="login"]', replacer: () => LoginInput.render() },
            { key: 'slot[name="password"]', replacer: () => PasswordInput.render() }
        );
    }

    @AsNode
    getTemplate() {
           return `
            <div class="sign-in d-flex justify-content-center align-items-center">
                <div class="card col-6">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3"> Sign In </h5>
                       <slot name="login"></slot>
                       <slot name="password"></slot>
                      <button type="button" class="btn btn-success">Sign in</button>
                    </div>
                </div>
            </div>
        `
    }

    bindEvent(node) {
        console.log(node, 'node');
        node.querySelector('button').addEventListener(
            'click',
            this.onClickHandler.bind(this)
        )
    }

    @BindEvent
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}
