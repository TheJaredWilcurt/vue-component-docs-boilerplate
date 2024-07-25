/* eslint-disable import/order */
import {
  createApp,
  Fragment,
  h as hyperscript
} from 'vue';

import App from '@@@/App.vue';
import router from '@@@/router/index.js';

import 'nprogress/nprogress.css';

/**
 * Replace bootstrap with whatever styling you are using.
 * Be sure to remove bootstrap from the package.json too.
 */
import 'bootstrap/dist/css/bootstrap.css';

async function startApp () {
  let app;
  /**
   * The accessibility bubble in the bottom right of the
   * page is only visible when running locally. When you
   * build the docs site, it will not be included.
   */
  if (process.env.NODE_ENV === 'development') {
    const { default: VueAxe, VueAxePopup } = await import('vue-axe');
    // import VueAxe, { VueAxePopup } from 'vue-axe';
    app = createApp({
      render: function () {
        return hyperscript(
          Fragment,
          [
            hyperscript(App),
            hyperscript(VueAxePopup)
          ]
        );
      }
    });
    app.use(VueAxe);
  } else {
    app = createApp(App);
  }

  app.use(router);
  app.mount('#app');
}

startApp();
