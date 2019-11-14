import Vue       from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import Prueba from '~/routers/routes/prueba';

export default new VueRouter({
    mode: 'history',
    scrollBehavior(){ return { x:0, y:0 } },
    routes: 
    [
        //...Prueba,
    ],
});

