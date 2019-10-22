/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');
/** Plugins */
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/** Componentes */
import prueba from './components/App_Prueba.vue';

Vue.component('app-prueba', prueba);


const app = new Vue({
    el : '#app',
});