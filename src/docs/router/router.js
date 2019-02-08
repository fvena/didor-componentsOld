import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

// Publics views
import MainLayout from '@/router/layouts/Main.layout.vue';
import DocsLayout from '@/router/layouts/Docs.layout.vue';
import HomeView from '@/router/views/publics/Home.view.vue';
import AboutView from '@/router/views/publics/About.view.vue';
import ArticlesView from '@/router/views/publics/Articles.view.vue';

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
    // Public routes
    {
      path: '/main',
      component: MainLayout,
      redirect: {
        name: 'home',
      },
      children: [
        {
          path: '/home',
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
    {
      path: '/docs',
      component: DocsLayout,
      redirect: {
        name: 'packages',
      },
      children: [
        {
          path: '/packages/:article*',
          name: 'packages',
          component: ArticlesView,
        },
        {
          path: '/:section/:article*',
          name: 'articles',
          component: ArticlesView,
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

router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar
  NProgress.start();
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar
  NProgress.done();
});

export default router;
