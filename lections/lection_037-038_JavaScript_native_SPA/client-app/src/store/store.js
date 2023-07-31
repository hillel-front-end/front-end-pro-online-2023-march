import Store from "@/plugins/store";

const state = {
    app: '1.0.0',
    isLoading: false
};

export const mutation_types = {
    SET_IS_LOADING: 'SET_IS_LOADER'
};

const mutations = {
    [mutation_types.SET_IS_LOADING](state, payload) {
        state.isLoading = payload
    }
};




export const store = new Store({
    state,
    mutations
});