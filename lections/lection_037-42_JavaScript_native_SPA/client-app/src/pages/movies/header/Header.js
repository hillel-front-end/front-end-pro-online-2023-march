import './Header.scss';
import Component from "@/plugins/component";
import {AsNode, BindEvent} from "@/common/decorators";
import httpService from "@/common/serives/Http.service";
import {router} from "@/router/router";
import {mutation_types, store} from "@/store/store";
import SearchMovies from "@/pages/movies/search-movies/SerchMovies";

export default class Header extends Component {
    constructor(...props) {
        super(...props);

        console.log(this.props.onSearch, 'onSearch')
    }

    @AsNode
    getTemplate() {
        return `
            <header class="header d-flex justify-content-between">
                <div class="header__search">
                    <slot name="search" ></slot>
                </div>
                <div class="header__logout">
                    <i class="bi bi-door-open-fill header__btn-logout"></i>
                </div>
            </header>
       `
    }

    bindEvent(node) {
        const button = node.querySelector('i.header__btn-logout');
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

    updateTemplate(template) {
        const searchMovies = new SearchMovies({
            onSearch: this.props.onSearch
        });

        return this.replaceSlot(
            template,
            { key: 'slot[name="search"]', replacer: () => searchMovies.render() },
        );
    }

    @BindEvent
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}