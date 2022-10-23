import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    values: {
      searchValue: '...',
    },
  },
  mutations: {
    setSearchValue(state, values) {
      state.values = Object.assign({}, state.values, values);
    },
  },
});

export default store;
