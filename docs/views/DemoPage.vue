<template>
  <VueDoxen
    modelValue="component"
    :demos="{ component: demo }"
    :styleTokens="styleTokens"
  />
</template>

<script>
import { styleTokens } from '@@@/helpers/styleTokens.js';

/**
 * This is a completely optional CSS file
 * that makes very minor changes to the Vue-Doxen
 * component. If your docs site looks better without
 * it, remove this file.
 */
import 'vue-doxen/vue-doxen.css';

export default {
  name: 'DemoPage',
  components: {
    VueDoxen
  },
  props: {
    demo: {
      type: Object,
      required: true
    }
  },
  // See: vue-options-api-constants-plugin
  constants: {
    styleTokens
  }
};
</script>
