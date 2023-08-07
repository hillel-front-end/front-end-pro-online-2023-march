import './Header.scss';
import Component from "@/plugins/component";
import {AsNode, BindEvent} from "@/common/decorators";
import httpService from "@/common/serives/Http.service";
import {router} from "@/router/router";
import {mutation_types, store} from "@/store/store";

export default class Header extends Component {
    constructor(...props) {
        super(...props);
    }


    @AsNode
    getTemplate() {
        return `
            <header class="header d-flex justify-content-end">
                <button class="header__exit">
                   <i class="bi bi-door-open-fill"></i>
                </button>
            </header>
       `
    }

    bindEvent(node) {
        const button = node.querySelector('button');
        button.addEventListener('click', this.onClickHandler.bind(this))
    }

    onClickHandler() {
        httpService.get('/logout')
            .catch(({ response }) => {
                if (response.status === 401) {
                    store.dispatch(mutation_types.SET_USER_INFO, null);
                    router.go('/sign-in')
                }
            })
    }

    @BindEvent
    render() {
        return this.getTemplate();
    }
}