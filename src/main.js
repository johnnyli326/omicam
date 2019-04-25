import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import VueAnalytics from 'vue-analytics';
import router from './router';
import App from './App.vue';
import store from './store';
import 'bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import currencyFilter from './filters/currency';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueAnalytics, { // Google Analysis
  id: 'UA-65565825-6',
  router,
  autoTracking: {
    skipSamePath: true,
    pageviewTemplate(route) {
      return {
        page: route.path,
        title: document.title,
        location: window.location.href,
        time: new Date(),
      };
    },
  },
});
Vue.component('Loading', Loading); // loading component
Vue.filter('currency', currencyFilter); // Currency Filter
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
