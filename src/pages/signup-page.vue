<template>
  <section class="signup-page flex column gap">
    <form class="flex column align-center gap" @submit.prevent="signup">
      <input v-model="name" type="text" placeholder="name" />
      <button>signup!</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user.service.js";
import eventBus from "../services/eventBus.service.js";

export default {
  data() {
    return {
      name: "",
    };
  },
  created() {},
  methods: {
    signup() {
      this.addUser();
    },
    async addUser() {
      await userService.signup(this.name);
      eventBus.$emit("userSigned", this.contactToEdit);
      this.$router.push("/");
    },
  },
};
</script>