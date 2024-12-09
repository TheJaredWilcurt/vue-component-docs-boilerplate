/* eslint-disable import/order */
import {
  createApp,
  Fragment,
  h as hyperscript
} from 'vue';
import constantsPlugin from 'vue-options-api-constants-plugin';

import App from '@@@/App.vue';
import router from '@@@/router/index.js';

import 'nprogress/nprogress.css';

/**
 * You can pick any of the Highlight JS themes you want.
 * They are listed here:
 * https://thejaredwilcurt.com/vue-doxen/styles#syntax
 */
import 'highlightjs/styles/ir-black.css';

/**
 * Replace bootstrap with whatever styling you are using.
 * Be sure to remove bootstrap from the package.json too,
 * and to update /docs/helpers/styleTokens.js.
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
    // The above is an async import equivalent to:
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

  app.use(constantsPlugin);
  app.use(router);
  app.mount('#app');
}

startApp();
