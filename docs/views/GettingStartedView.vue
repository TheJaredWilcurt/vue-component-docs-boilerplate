<template>
  <div>
    <h2>Getting Started</h2>

    <p>In three easy steps!</p>

    <h3>Basic usage</h3>

    <ol>
      <li>
        <code>npm install --save-dev your-library</code>
      </li>
      <li>
        In your <code>main.js</code> import the CSS.
        <ul>
          <li>
            <code>import 'your-library/your-library.css';</code>
          </li>
        </ul>
      </li>
      <li>
        Click on a component in the side bar for import instructions.
      </li>
    </ol>

    <h3>Globally installing components</h3>

    <p>
      If you prefer to install all components from this library at once,
      rather than import them and use them one-at-a-time, you can.
    </p>

    <DoxenCodeBox
      :code="GLOBAL_INSTALL_EXAMPLE"
      :styleTokens="styleTokens"
    />
  </div>
</template>

<script>
import { DoxenCodeBox } from 'vue-doxen';

import { styleTokens } from '@@@/helpers/styleTokens.js';

const GLOBAL_INSTALL_EXAMPLE = `
// main.js
import { createApp } from 'vue';
import YourLibrary from 'your-library';

import App from '@/App.vue';

import 'your-library/your-library.css';

const app = createApp(App);
// Globally installs all your-library components.
app.use(YourLibrary);
app.mount('#app');
`.trim();

export default {
  name: 'GettingStartedView',
  components: {
    DoxenCodeBox
  },
  // See: vue-options-api-constants-plugin
  constants: {
    GLOBAL_INSTALL_EXAMPLE,
    styleTokens
  }
};
</script>
