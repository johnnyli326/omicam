import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '',
    name: 'Dashboard',
    component: () => import('./components/Dashboard.vue'),
    children: [{
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    }, {
      path: 'omicam',
      name: 'Omicam',
      component: () => import('./views/Omicam.vue'),
    }, {
      path: 'omi-studio',
      name: 'OmiStudio',
      component: () => import('./views/OmiStudio.vue'),
    }, {
      path: 'news',
      name: 'News',
      component: () => import('./views/News.vue'),
    }, {
      path: 'omistory',
      name: 'OmiStory',
      component: () => import('./views/OmiStory.vue'),
    }, {
      path: 'contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue'),
    }, {
      path: 'product/omicam-wearable-vr-camera',
      name: 'Product',
      component: () => import('./views/Product.vue'),
    }, {
      path: 'about',
      name: 'About',
      component: () => import('./views/About.vue'),
    }, {
      path: 'privacy-policy',
      name: 'Privacy',
      component: () => import('./views/Privacy.vue'),
    }, {
      path: 'terms-of-service',
      name: 'Service',
      component: () => import('./views/Service.vue'),
    }, {
      path: 'omi-product',
      name: 'OMI-product',
      component: () => import('./views/ProductList.vue'),
    }, {
      path: '*',
      redirect: '/',
    }],
  }],
});
