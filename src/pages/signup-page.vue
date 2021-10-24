<template>
  <section class="signup-page flex column gap align-center padding-top">
    <h2>Signup today:</h2>
    <form class="flex column align-center gap" @submit.prevent="signup">
      <input v-model="user.username" type="text" placeholder="Username" />
      <input v-model="user.fullname" type="text" placeholder="Fullname" />
      <input v-model="user.password" type="password" placeholder="Password" />
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
      user: {
        username: "",
        fullname: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    async signup() {
      await userService.save(this.user);
      eventBus.$emit("userSigned", this.contactToEdit);
      this.$router.push("/");
    },
  },
};
</script>
