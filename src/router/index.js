import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Staff from '@/pages/Staff';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/staff',
      name: 'Staff',
      component: Staff,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
