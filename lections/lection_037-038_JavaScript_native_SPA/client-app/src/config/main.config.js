import { router } from "@/router/router";
import '@/store/store'

function MainApp(App, selector) {
    document.querySelector(selector).append(new App().render());
    router.onInit();
    router.go(location.pathname);
}

export default MainApp;