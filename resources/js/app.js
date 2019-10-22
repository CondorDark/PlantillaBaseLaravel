/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

//require('./bootstrap');

// /** Componentes Global*/
import prueba from './components/App_Prueba.vue';

// /** Declaración Componente Global */
Vue.component('app-prueba', prueba);

import Vue     from 'vue';
import Routers from './routers/router';

export let app = new Vue({
   el: '#app',
   Routers,
});