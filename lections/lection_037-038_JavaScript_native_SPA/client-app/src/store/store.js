import Store from "@/plugins/store";

const state = {
    app: '1.0.0',
    isLoading: false,
    alert: {
        type: '',
        message: ''
    },
    userInfo: null
};

export const mutation_types = {
    SET_IS_LOADING: 'SET_IS_LOADER',
    SET_ALERT: 'SET_ALERT',
    SET_USER_INFO: 'SET_USER_INFO'
};

const mutations = {
    [mutation_types.SET_IS_LOADING](state, payload) {
        state.isLoading = payload
    },
    [mutation_types.SET_ALERT](state, payload) {
        state.alert = payload;
    },
    [mutation_types.SET_USER_INFO](state, payload) {
        state.userInfo = payload;
    }

};




export const store = new Store({
    state,
    mutations
});