import Vue from 'vue';
import Vuex from 'vuex';

import estado from './state'
import mutacoes from './mutacoes'


Vue.use(Vuex)


export default new Vuex.Store({
    state: estado,
    mutations: mutacoes
});