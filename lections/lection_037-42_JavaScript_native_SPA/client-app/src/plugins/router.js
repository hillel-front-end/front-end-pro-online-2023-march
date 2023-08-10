import Component from "@/plugins/component";
import Observer from "@/plugins/observer";

export default class Router {
    routes = []
    originalPushState = null;
    #container = null;
    #observerBeforeEach = new Observer()

    constructor(routes) {
        console.log('---- start configuration Router Plugin ---');

        this.routes = routes;

        this.originalPushState = history.pushState;

        history.pushState = (state, title, pathTo) => {
            this.go(pathTo);
        }


        history.onpushstate = (state, title, pathTo) => {
            setTimeout(() => {
                this.originalPushState.apply(history, [state, title, pathTo]);
            });
        }
    }

    onInit() {
       this.#container = document.querySelector('.router-view');
    }

    #updateView(pathTo) {
        let Component = (this.#findComponent(pathTo) || this.#findComponent('*'))

        if (Component) {
            this.#renderComponent(Component)
        }
    }

    #findComponent(pathTo) {
        return this.routes.find(route => route.path === pathTo)?.component
    }

    // innerHTML VS createElement

    #renderComponent(Component) {
        this.#container.innerHTML = '';
        this.#container.append(new Component().render());
    }

    go(pathTo) {
        const next = (anotherPathTo) => {
            const route = anotherPathTo || pathTo;

            if (typeof history.onpushstate === 'function') {
                history.onpushstate(null, null, route);
            }

            this.#updateView(route);
        }

        const pathFrom = location.pathname;

        this.#publishBeforeEach(pathFrom, pathTo, next)

    }

    #publishBeforeEach(...args) {
        this.#observerBeforeEach.broadcast(...args);
    }

    beforeEach(cb) {
        if (!cb) return;

        this.#observerBeforeEach.subscribe(cb);
    }


}