import { router } from "@/router/router";


function MainApp(instanceCmp, selector) {
    document.querySelector(selector).innerHTML = instanceCmp;
    router.onInit();
    router.go(location.pathname);
}

export default MainApp;