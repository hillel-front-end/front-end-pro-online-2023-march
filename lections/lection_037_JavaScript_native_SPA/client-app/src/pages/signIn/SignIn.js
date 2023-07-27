import './signin.scss'
import Component from "@/plugins/component";
import Input from "@/common/components/Input/Input";
import { AsNode } from "@/common/decorators";

export default class SignIn extends Component {
    updateTemplate(template) {
        const LoginInput = new Input({
            type: 'text',
            name: 'login',
            id: 'login',
            label: 'Login'
        });

        const PasswordInput = new Input({
            type: 'password',
            name: 'password',
            id: 'password',
            label: 'Password'
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
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}
