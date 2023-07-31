import Component from "@/plugins/component";
import Loader from "@/common/components/loader/Loader";
import {AsNode} from "@/common/decorators";

export default class App extends Component {
    @AsNode
    getTemplate() {
        return `
            <main class="main-app d-flex min-vh-100">
               <div class="router-view d-flex flex-column"></div>
               <slot name="loader"></slot>
            </main>
        `
    }

    updateTemplate(template) {
        return this.replaceSlot(
            template,
            { key: 'slot[name="loader"]', replacer: () => new Loader().render() },
        );
    }

    render() {
        return this.updateTemplate(
            this.getTemplate()
        )
    }
}