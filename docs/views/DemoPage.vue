<template>
  <VueDoxen
    modelValue="component"
    :demos="{ component: demo }"
    :styleTokens="styleTokens"
  />
</template>

<script>
import { styleTokensBootstrap5, VueDoxen } from 'vue-doxen';

/**
 * You can pick any of the Highlight JS themes you want:
 * Listed here:
 * https://thejaredwilcurt.com/vue-doxen/styles#syntax
 */
import 'highlightjs/styles/ir-black.css';

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
  computed: {
    styleTokens: function () {
      /**
       * These styleTokens are unique to Bootstrap,
       * you should remove them and replace them with your own
       * that work for your styles.
       * See: https://thejaredwilcurt.com/vue-doxen/styles
       */
      return styleTokensBootstrap5;
    }
  }
};
</script>
