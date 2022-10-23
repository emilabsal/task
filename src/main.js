import Vue from 'vue';
import App from './App.vue';
import VueLocalForage from 'vue-localforage';
import './assets/styles/index.css';
import store from './store/index.js';

Vue.config.productionTip = false;
Vue.use(VueLocalForage);

// Vue.use(store);

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount('#app');
