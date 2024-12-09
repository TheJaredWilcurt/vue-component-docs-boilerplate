<template>
  <footer aria-label="footer">
    <!--
      Please leave in some reference to Vue-Doxen.
      It is an open source project and has no marketing budget.
    -->
    <a
      class="vue-doxen-link"
      href="https://TheJaredWilcurt.com/vue-doxen"
      title="Automated Vue Component Documentation"
    >
      <img
        alt="Vue-Doxen logo"
        class="vue-doxen-logo"
        src="../assets/vue-doxen-logo-small.png"
      />
      Made with
      <span>Vue-Doxen</span>
    </a>
    <span class="year">
      &copy;
      {{ (new Date()).getFullYear() }}
    </span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 100px auto 80px auto;
}
.vue-doxen-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.vue-doxen-link span {
  font-size: 15px;
}
.vue-doxen-logo {
  height: 40px;
  margin-bottom: 5px;
  image-rendering: smooth;
  image-rendering: high-quality;
}
.year {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
}
</style>
