<template>
  <header class="app-header flex align-center space-between">
    <router-link to="/"><h1>Mister Bitcoin</h1></router-link>
    <nav class="flex gap">
      <router-link to="/statistics">
        <span class="far fa-chart-bar" />
        Statistics
      </router-link>
      |
      <router-link to="/contact">
        <span class="far fa-address-book" />
        Contacts
      </router-link>
      |
      <button v-if="loggedInUser" @click="logout">
        <span class="fas fa-sign-out-alt" />
        Logout
      </button>
      <template v-else>
        <button @click="$emit('openLoginModal')">
          <span class="fas fa-sign-in-alt" />
          Login
        </button>
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

