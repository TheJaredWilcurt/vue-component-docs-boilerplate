<template>
  <DemoPage :demo="demo" />
</template>

<script>
import DemoPage from '@@@/views/DemoPage.vue';

import COMPONENT from '@/components/YourLibraryButton.vue';

export default {
  name: COMPONENT.name + 'Demo',
  components: {
    DemoPage
  },
  computed: {
    demo: function () {
      return {
        // To see what can be documented in this demo object:
        // https://thejaredwilcurt.com/vue-doxen/documenting#documenting
        component: COMPONENT,
        description: '<p>Common button component</p>',
        importStatement: 'import { ' + COMPONENT.name + ' } from \'your-library\';',
        propsToDemo: {
          active: {
            description: 'Conveys if a button is in an active/enabled/selected state.'
          },
          status: {
            description: 'Effects the color of the button'
          }
        },
        slotsToDemo: {
          default: 'Button Text'
        },
        emitsToDemo: {
          click: {
            description: 'Emits when button is clicked.',
            value: 'The native mouse click event (<code>$event</code>).'
          }
        }
      };
    }
  }
};
</script>
