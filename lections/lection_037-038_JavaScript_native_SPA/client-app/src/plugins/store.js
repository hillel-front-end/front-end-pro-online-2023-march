import PubSub from "@/plugins/pubsub";

export default class Store {
    state = null
    mutations = null
    #pubSub = new PubSub()

    constructor({ state, mutations }) {
        this.state = state;
        this.mutations = mutations
    }


    dispatch(MUTATION_TYPE, payload) {
        console.log('---call dispatch ---', MUTATION_TYPE)
        const mutation = this.mutations[MUTATION_TYPE];

        if (mutation) {
            mutation(this.state, payload)
        }

        this.publish(MUTATION_TYPE)
    }

    subscribe(MUTATION_TYPE, listener) {
        console.log('----call store subscribe -----', MUTATION_TYPE);
        this.#pubSub.subscribe(MUTATION_TYPE, listener);
    }

    publish(MUTATION_TYPE) {
        console.log('----call store publish -----', MUTATION_TYPE);
        this.#pubSub.publish(MUTATION_TYPE, this.state)
    }
}