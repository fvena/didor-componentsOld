import Vue from 'vue';
import Router from 'vue-router';

// Publics views

// Privates views
import MainLayout from '@/router/layouts/Main.layout.vue';
import HomeView from '@/router/views/privates/Home.view.vue';
import AboutView from '@/router/views/privates/About.view.vue';

// Not found route - 404
import NotFoundView from '@/router/views/NotFound.view.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      },
    },
    // Privates routes
    {
      path: '/main',
      component: MainLayout,
      redirect: {
        name: 'home',
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView,
        },
      ],
    },

    // Routes demo
    {
      path: '/demo.html',
    },

    // Routes not found - 404
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
    },
    {
      path: '*',
      redirect: {
        name: '404',
      },
    },
  ],
});

export default router;
