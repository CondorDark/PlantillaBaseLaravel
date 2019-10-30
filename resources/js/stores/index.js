import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/** Modules */
import message from './app/message'

export default new Vuex.Store({
    modules: 
    {
        message,
    },
    strict: debug
});
