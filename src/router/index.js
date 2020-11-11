import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/home.vue';
import Welcome from '../components/Welcome.vue';
import users from '../components/user/users.vue';

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      children: [{ path: '/Welcome', component: Welcome },
        { path: '/users', component: users }],
    },

  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) next('login');
  next();
});

export default router;
