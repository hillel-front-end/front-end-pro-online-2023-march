import './alert.scss';
import Component from "@/plugins/component";
import {AsNode, SaveContainer} from "@/common/decorators";
import {mutation_types, store} from "@/store/store";

export default class Alert extends Component {

    queue = [];
    generator  = null;
    inProgress = false;

    constructor(...props) {
        super(...props);
        store.subscribe(mutation_types.SET_ALERT, this.addToQueue.bind(this))
    }

    addToQueue({ alert }) {
        this.queue.push(alert);

        console.log('----- add to queue -----', this.queue);

        if (!this.inProgress) {
            this.start();
        }
    }

    start() {
        console.log('----- start queue------');
        this.inProgress = true;
        this.generator = this.process();
        this.generator.next();
    }

    finish() {
        console.log('----- finish queue------');
        this.inProgress = false;
        this.generator = null;
    }

    * process() {
        while(this.queue.length !== 0) {
            console.log('------ process queue ----->', this.queue)
            const alert = this.queue.shift();
            this.updateAlert(alert)
            yield;
        }

        this.finish();
    }

    updateAlert(alert) {
        this.show(alert);

        setTimeout(() => {
            this.hide(alert.type);
        }, 3500)
    }

    show({ message, type }) {
        const alertNode = this.$container.querySelector('.alert')
        alertNode.innerText = message;
        alertNode.classList.add(type);
        this.$container.classList.remove('fade')
    }

    hide(type) {
        this.$container.classList.add('fade');
        alertNode.classList.remove(type);
        alertNode.innerText = '';
        this.generator.next();
    }


    @AsNode
    getTemplate() {
        return `
            <div class="alert-wrapper fade">
                <div class="alert" role="alert"></div>  
            </div>
        `
    }

    @SaveContainer
    render() {
        return this.getTemplate();
    }
}