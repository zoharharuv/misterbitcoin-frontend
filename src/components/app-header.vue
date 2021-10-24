<template>
  <header class="app-header flex align-center space-between">
    <router-link to="/"><h1>Mister Bitcoin</h1></router-link>
    <nav>
      <router-link to="/statistics">Statistics</router-link> |
      <router-link to="/contact">Contacts</router-link> |
      <button v-if="loggedInUser" @click="logout">Logout</button>
      <template v-else>
        <button @click="$emit('openLoginModal')">Login</button> |
      <router-link to="/signup">Signup</router-link>
      </template>
    </nav>
    <user-msg />
  </header>
</template>

<script>
import userMsg from "./user-msg";

export default {
  props: ["loggedInUser"],
  components: {
    userMsg,
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

