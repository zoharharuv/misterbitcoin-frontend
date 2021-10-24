<template>
  <section class="app">
    <app-header
      :loggedInUser="loggedInUser"
      @logout="logout"
      @openLoginModal="openLoginModal"
    />
    <login-modal v-if="showLoginModal" @login="login" />
    <router-view />
  </section>
</template>

<script>
import eventBus, { showUserMsg } from "./services/eventBus.service";
import userService from "./services/user.service";

import loginModal from "./components/login-modal";
import appHeader from "./components/app-header.vue";

export default {
  name: "root-cmp",
  data() {
    return {
      loggedInUser: null,
      showLoginModal: false,
    };
  },
  created() {
    this.loggedInUser = userService.getLoggedInUser();
  },
  methods: {
    async logout() {
      await userService.logout();
      this.loggedInUser = null;
      showUserMsg("Logged out!");
      eventBus.$emit('logout')
    },
    openLoginModal() {
      this.showLoginModal = true;
    },
    async login(creds) {
      try {
        const user = await userService.login(creds);
        this.loggedInUser = user;
        this.showLoginModal = false;
        showUserMsg("Logged in!");
        eventBus.$emit('login', user)
      } catch (err) {
        console.log(err);
        showUserMsg("Wrong details", "danger");
      }
    },
  },
  components: {
    appHeader,
    loginModal,
  },
};
</script>
