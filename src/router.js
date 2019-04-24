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
      name: 'NewsList',
      component: () => import('./views/News.vue'),
    }, {
      path: 'news/:newsId',
      name: 'news',
      component: () => import('./views/NewsContent.vue'),
    }, {
      path: 'story',
      name: 'OmiStory',
      component: () => import('./views/OmiStory.vue'),
    }, {
      path: 'story/:storyId',
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
      path: 'checkout',
      name: 'Checkout',
      component: () => import('./views/Checkout.vue'),
    }, {
      path: 'shop/:productId',
      name: 'Product',
      component: () => import('./views/Product.vue'),
    }, {
      path: 'ordertracking',
      name: 'CheckMyOrder',
      component: () => import('./views/CheckMyOrder.vue'),
    }, {
      path: 'thankyou/:paymentId',
      name: 'Thankyou',
      component: () => import('./views/ThankYou.vue'),
    }, {
      path: '*',
      redirect: '/',
    }],
  }],
});
