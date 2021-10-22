<template>
  <header class="app-header flex align-center space-between">
    <router-link to="/"><h1>Mister Bitcoin</h1></router-link>
    <nav>
      <router-link to="/statistics">Statistics</router-link> |
      <router-link to="/contact">Contacts</router-link> |
      <span v-if="user" @click="logout"> Logout </span>
      <span v-else>
        <router-link to="/signup">Signup</router-link>
      </span>
    </nav>
    <user-msg />
  </header>
</template>

<script>
import userMsg from "./user-msg";
import eventBus from "../services/eventBus.service.js";
import userService from "../services/user.service.js";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.loadUser();
    eventBus.$on("userSigned", this.loadUser);
  },
  methods: {
    async loadUser() {
      this.user = await userService.getUser();
    },
    logout() {
      userService.logout();
      this.user = null;
      eventBus.$emit("logout", null);
    },
  },
  components: {
    userMsg,
  },
};
</script>
