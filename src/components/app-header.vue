<template>
  <header class="app-header flex align-center space-between">
    <router-link to="/"><h1>Mister Bitcoin</h1></router-link>
    <nav>
      <router-link to="/statistics">Statistics</router-link> |
      <router-link to="/contact">Contacts</router-link>
    </nav>
    <user-msg />
  </header>
</template>

<script>
import userMsg from "./user-msg";
export default {
  components: {
    userMsg,
  },
};
</script>
