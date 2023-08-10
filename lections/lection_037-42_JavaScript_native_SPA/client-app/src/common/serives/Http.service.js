import axios from "axios";
import { mutation_types, store } from "@/store/store";

const BASE_URL = 'http://localhost:9001';

class HttpService {
    $http = axios.create();

    constructor() {
        this.$http.interceptors.request.use((config) => {

            if (!config.blockLoader) {
                store.dispatch(mutation_types.SET_IS_LOADING, true);
            }

            return config;
        })

        this.$http.interceptors.response.use((response) => {
            this.loaderStop();
            return response;
        }, (e) => {

            store.dispatch(mutation_types.SET_ALERT, {
                type: 'alert-danger',
                message: e.message
            });


            this.loaderStop();
            return Promise.reject(e)
        });
    }


    async get(path, blockLoader = false) {
       return await this.$http.get( `${BASE_URL}${path}`, {
           blockLoader
       });
    }

    async post(path, body, blockLoader = false) {
        return await this.$http.post( `${BASE_URL}${path}`, body, {
            blockLoader
        });
    }



    loaderStop() {
        setTimeout(() => {
            store.dispatch(mutation_types.SET_IS_LOADING, false);
        }, 1000)
    }
}


export default new HttpService()


// store.dispatch(mutation_types.SET_ALERT, {
//     type: 'alert-danger',
//     message: e.message
// })