<template>
  <footer aria-label="footer">
    &copy;{{ (new Date()).getFullYear() }}
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
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 100px auto 80px auto;
  font-size: 20px;
}
</style>
