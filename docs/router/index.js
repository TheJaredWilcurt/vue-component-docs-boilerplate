/* eslint-disable import/order */
import _kebabCase from 'lodash.kebabcase';
import NProgress from 'nprogress';
import {
  createRouter,
  createWebHistory
} from 'vue-router';

import { componentsToDemo } from '@@@/demos/index.js';

function Catch () {
  window.location.reload();
}

function createDemoRoute (name) {
  return {
    // Create the path for the URL
    path: '/your-library/components/' + _kebabCase(name),
    // Give it an optional name
    name,
    // Asynchronously import the demo component.
    // Rollup requires this exact format for dynamic imports.
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    component: () => import(`../demos/${name}Demo.vue`).catch(Catch)
  };
}

const routes = [
  {
    path: '/your-library/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@@@/views/NotFoundView.vue').catch(Catch)
  },
  {
    path: '/your-library/',
    name: 'home',
    component: () => import('@@@/views/HomeView.vue').catch(Catch)
  },
  {
    path: '/your-library/getting-started',
    name: 'gettingStarted',
    component: () => import('@@@/views/GettingStartedView.vue').catch(Catch)
  },
  ...componentsToDemo.map((name) => {
    return createDemoRoute(name);
  })
];

function scrollBehavior (to, from, savedPosition) {
  // check that path is different, so this doesn't scroll to top every time
  // a query parameter is changed
  if (to.path !== from.path) {
    if (
      // if this is a push/pop state (forward/back), use the saved position
      savedPosition ||
      (
        // don't change screen position when closing/opening a modal
        to.meta?.savePosition ||
        to.params?.savePosition
      )
    ) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash, top: 0 };
    }

    // otherwise always scroll to the top of the page
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
