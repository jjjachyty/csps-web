import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import * as actions from './actions'
import * as getters from './getters'
import { state, mutations } from './mutations'
import createLogger from 'vuex/dist/logger'

import loginModule from './modules/login';
import registerModule from './modules/register';


const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,

    modules: {
        /**cust modules */
        loginModule,
        registerModule

    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})