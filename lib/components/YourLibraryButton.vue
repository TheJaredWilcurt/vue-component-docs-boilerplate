<template>
  <button
    :aria-pressed="active"
    :class="[
      'btn',
      'btn-' + status,
      { active }
    ]"
    data-test="button"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'YourLibraryButton',
  emits: ['click'],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'danger'
        ].includes(value);
      }
    }
  }
};
</script>

<style>
.btn {
  border: 0px;
}
</style>
