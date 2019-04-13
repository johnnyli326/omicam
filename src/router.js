import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  base: '/',
  mode: 'history',
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
      path: 'omistory/:storyId',
      name: 'story',
      component: () => import('./views/OmiStoryContent.vue'),
    }, {
      path: 'contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue'),
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
      path: 'shop',
      name: 'Shop',
      component: () => import('./views/Shop.vue'),
    }, {
      path: 'order',
      name: 'Order',
      component: () => import('./views/order.vue'),
    }, {
      path: 'product/:productId',
      name: 'Product',
      component: () => import('./views/Product.vue'),
    }, {
      path: 'productlist',
      name: 'productlist',
      component: () => import('./views/ProductList.vue'),
    }, {
      path: '*',
      redirect: '/',
    }],
  }],
});
