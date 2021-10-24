<template>
  <section class="login-modal">
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

