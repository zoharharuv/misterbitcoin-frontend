<template>
  <section class="login-modal flex column align-center">
    <div
      @click="$emit('closeLoginModal')"
      class="close-modal flex center-center align-end"
    >
      <span>X</span>
    </div>
    <form
      @submit.prevent="$emit('login', creds)"
      class="flex column align-center gap"
    >
      <h3>Enter user details</h3>
      <input
        v-model="creds.username"
        type="text"
        placeholder="Username / email"
      />
      <input v-model="creds.password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
    <span @click="$emit('closeLoginModal')">
      <router-link to="/signup"><small>- Or signup -</small></router-link>
    </span>
  </section>
</template>

<script>
export default {
  data() {
    return {
      creds: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

