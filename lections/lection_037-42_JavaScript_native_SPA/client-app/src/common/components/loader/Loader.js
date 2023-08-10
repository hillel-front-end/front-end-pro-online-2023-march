import './loader.scss';
import Component from "@/plugins/component";
import {AsNode, SaveContainer} from "@/common/decorators";
import {mutation_types, store} from "@/store/store";

export default class Loader extends Component {
    constructor(...props) {
        super(...props);

        store.subscribe(
            mutation_types.SET_IS_LOADING,
            this.toggleLoader.bind(this)
        );
    }

    toggleLoader() {
        if (this.isLoading) {
            this.$container.classList.remove('d-none');
        } else {
            this.$container.classList.add('d-none');
        }
    }


    get isLoading() {
        return store.state.isLoading;
    }

    @AsNode
    getTemplate() {
        const classNames = [
            'loader-backdrop',
            'd-flex',
            'justify-content-center',
            'align-items-center'
        ];

        if (!this.isLoading) {
            classNames.push('d-none');
        }

        return `
            <div 
              class="${classNames.join(' ')}"
            >
                <div class="loader spinner-border text-danger" role="status" />
            </div> 
        `
    }

    @SaveContainer
    render() {
        return this.getTemplate();
    }
}