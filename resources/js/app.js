/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

//require('./bootstrap');

import Vue     from 'vue';
import vuetify from 'vuetify';
import router  from './routers';
import store   from './stores';

/** Componentes Global
 *  Declaración Global Componente
*/
import App from './views/App.vue';
Vue.component('App', App);

export let app = new Vue({
   el: '#app',
   router,
   store,
   vuetify,
   render: h => h(App)
});