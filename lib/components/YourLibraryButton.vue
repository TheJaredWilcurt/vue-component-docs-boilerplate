<template>
  <button
    :aria-pressed="selected"
    :class="[{ selected }, status]"
    data-test="button"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
/**
 * Though the rest of this component's documentation lives in /docs/demos/yourLibraryButton.js,
 * The allowed status is used both by Vue-Doxen's `allowed` key, and Vue's `validator` key.
 * So it is defined as a variable in this file and referenced in both places.
 * You could also pull this variable out to a shared constants file and have it imported
 * into the component and the demo file.
 *
 * NOTE: If you are using <script setup> there is no way for the definProps() macro to reference
 * variables. This is because Vue creates an Options API <script> block and hoists the object in
 * the defineProps macro to the Options API, so it can no longer access the variables defined in
 * the other <script setup> block. You are better off using the Options API traditionally or
 * with a setup function.
 */
const ALLOWED_STATUS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger'
];

export default {
  name: 'YourLibraryButton',
  emits: ['click'],
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: ALLOWED_STATUS[0],
      allowed: ALLOWED_STATUS,
      validator: function (value) {
        return ALLOWED_STATUS.includes(value);
      }
    }
  }
};
</script>
