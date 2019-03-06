import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: () => import('./components/Dashboard.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    }],
  },
    // {
    //   path: '/about',
    //   name: 'Home',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/Home.vue'),
    // },
  ],
});
