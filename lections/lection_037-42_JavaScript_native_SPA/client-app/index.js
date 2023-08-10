import './main.scss';
import MainApp from "@/config/main.config";
import App from "./App";
import httpService from "@/common/serives/Http.service";
import { mutation_types, store } from "@/store/store";


httpService.get('/', true)
    .then((response) => {
      store.dispatch(mutation_types.SET_USER_INFO, response)
    })
    .catch((e) => {
      setTimeout(() => {
          store.dispatch(mutation_types.SET_ALERT, {
              type: 'alert-danger',
              message: e.message
          });
      });
    })
    .finally(() => MainApp(App, '#app'))
