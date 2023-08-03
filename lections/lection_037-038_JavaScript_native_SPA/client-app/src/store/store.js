import Store from "@/plugins/store";

const state = {
    app: '1.0.0',
    isLoading: false,
    alert: {
        type: '',
        message: ''
    }
};

export const mutation_types = {
    SET_IS_LOADING: 'SET_IS_LOADER',
    SET_ALERT: 'SET_ALERT'
};

const mutations = {
    [mutation_types.SET_IS_LOADING](state, payload) {
        state.isLoading = payload
    },
    [mutation_types.SET_ALERT](stat, payload) {
        state.alert = payload;
    }

};




export const store = new Store({
    state,
    mutations
});