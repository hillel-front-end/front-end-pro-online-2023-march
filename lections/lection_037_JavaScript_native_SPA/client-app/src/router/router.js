import Router from "@/plugins/router";
import Movies from "@/pages/movies/Movies";
import SignIn from "@/pages/signIn/SignIn";
import NotFound from "@/pages/not-found/NotFound";

const routes = [
    {
        path: '/',
        component: Movies
    },
    {
        path: '/sign-in',
        component: SignIn,
        beforeEach() {

        }
    },
    {
        path: '*',
        component: NotFound
    }
]

export const router = new Router(routes)

const isAuth = false;
router.beforeEach(function (from, to, next) {
    if (isAuth) {
        next();
        return;
    }

    next('/sign-in');
});