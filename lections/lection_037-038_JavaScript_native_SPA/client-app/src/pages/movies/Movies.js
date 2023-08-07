import './movies.scss'
import Component from "@/plugins/component";
import {AsNode, SaveContainer} from "@/common/decorators";
import Header from "@/pages/movies/header/Header";

export default class Movies extends Component{

    updateTemplate(template) {
        const header = new Header();

        return this.replaceSlot(
            template,
            { key: 'slot[name="header"]', replacer: () => header.render() },
        );
    }

    @AsNode
    getTemplate() {
        return `
            <main class="movies-page">
                <slot name="header"></slot>
            </main>
        `
    }

    @SaveContainer
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}