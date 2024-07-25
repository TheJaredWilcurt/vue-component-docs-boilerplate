<!--
  This file is using some Bootstrap classes for basic layout,
  You should remove them if you are not using Bootstrap.
-->
<template>
  <div class="container">
    <div class="row">
      <SideBar class="col-xl-2 col-lg-3" />
      <main aria-label="main" class="col-xl-10 col-lg-9">
        <RouterView />
      </main>
    </div>
    <div class="row">
      <div class="col-12">
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from '@@@/components/AppFooter.vue';
import SideBar from '@@@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    SideBar
  }
};
</script>
