/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

//require('./bootstrap');

/** Plugins
 * Plugins de configuración
*/
import Vue     from 'vue'
import vuetify from './plugins/vuetify'
import router  from './routers'
import store   from './store'

/** Componentes Auth (Autenticación)
 * auth.js es un contener de componentes para autenticación
*/
import './plugins/auth';

/** Componentes Global
 *  Declaración Global Componente
*/
import App from './views/App.vue'
Vue.component('app', App);

/** Vue
 * Configuración e Integración a Vue
*/
export let app = new Vue({
   el: '#app',
   router,
   store,
   vuetify,
   //render: h => h(App)
});
