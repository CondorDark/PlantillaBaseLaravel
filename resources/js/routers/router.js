import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from './../pages/Welcome.vue';

export default new VueRouter({
    routers: 
    [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        // {
        //     path: '*',
        //     component: 404
        // }
    ],
    mode: 'history',
    scrollBehavior()
    {
        return {x:0, y:0}
    },
});