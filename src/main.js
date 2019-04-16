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
import timestampFormat from './filters/timestampFormat';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueAnalytics, {
  id: 'UA-65565825-6',
  router,
  autoTracking: {
    skipSamePath: true,
    pageviewTemplate(route) {
      console.log(route.path);
      return {
        page: route.path,
        title: document.title,
        location: window.location.href,
        time: new Date(),
      };
    },
    // shouldRouterUpdate(to, from) {
    //   // Here I'm allowing tracking only when
    //   // next route path is not the same as the previous
    //   console.log(to);
    //   return to.path !== from.path;
    // },
  },
});
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timeFormat', timestampFormat);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
