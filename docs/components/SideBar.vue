<template>
  <aside>
    <div class="center">
      <Router-Link :to="{ name: 'home' }">
        <img
          alt="Your Library Logo"
          class="logo"
          src="../assets/logo.svg"
        />
      </Router-Link>
      <h1>Your Library</h1>
    </div>
    <nav aria-label="sidebar" class="nav flex-column">
      <RouterLink
        v-for="(linkText, linkName) in links"
        :to="{ name: linkName }"
        :key="'link' + linkName"
      >
        {{ linkText }}
      </RouterLink>

      <h2 class="mt-4">Components</h2>

      <RouterLink
        v-for="name in demos"
        :to="{ name }"
        :key="'demo-link-' + name"
      >
        {{ name }}
      </RouterLink>
    </nav>
  </aside>
</template>

<script>
import { componentsToDemo } from '@@@/demos/index.js';

export default {
  name: 'SideBar',
  data: function () {
    return {
      links: {
        home: 'Home',
        gettingStarted: 'Getting Started'
      }
    };
  },
  computed: {
    demos: function () {
      return componentsToDemo;
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
}
.center {
  text-align: center;
}
.logo {
  display: inline-block;
  max-width: 200px;
  max-height: 150px;
  margin: 0px auto;
  padding: 20px;
}
</style>
