import Component from "@/plugins/component";

export default class App extends Component {
    getTemplate() {
        return `
            <main class="main-app d-flex min-vh-100">
               <div class="router-view d-flex flex-column"></div>
            </main>
        `
    }

    render() {
        return this.getTemplate();
    }
}