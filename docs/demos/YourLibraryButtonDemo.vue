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
        component: COMPONENT,
        description: 'Common button component',
        propsToDemo: {
          selected: {
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
