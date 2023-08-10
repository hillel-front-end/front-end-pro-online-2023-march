import './Signin.scss'
import Component from "@/plugins/component";
import Input from "@/common/components/Input/Input";
import { AsNode, BindEvent } from "@/common/decorators";
import { mutation_types, store } from "@/store/store";
import axios from "axios";
import httpService from "@/common/serives/Http.service";
import {router} from "@/router/router";

export default class SignIn extends Component {
    credentials = {}


    onInputChangeHandler(event) {
        const { value, name } = event.target;
        this.credentials[name] = value;
    }

    async onClickHandler(event) {
        const { login, password } = this.credentials;

        if (login && password) {
            this.onSignIn().catch((e) => null)
        }
    }


    async onSignIn() {
        const response = await httpService.post(
            '/sign-in',
            this.credentials
        );

        if (response.status === 200) {
            store.dispatch(mutation_types.SET_ALERT, {
                type: 'alert-success',
                message: 'Ви авторизовані успішно'
            })
            store.dispatch(mutation_types.SET_USER_INFO, response.data);

            router.go('/')
        }
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
