import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import currencyFilter from './filters/currency';
import timestampFormat from './filters/timestampFormat';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timeFormat', timestampFormat);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
