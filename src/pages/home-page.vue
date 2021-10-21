<template>
  <section class="home-page flex justify-center align-center">
    <div v-if="user" class="user-details">
      <h2>{{ user.name }}</h2>
      <h3>Coins: {{ user.coins }}</h3>
    </div>
  </section>
</template>

<script>
import userService from "../services/user.service";
import bitcoinService from "../services/bitcoin.service";

export default {
  data() {
    return {
      user: {},
      rate: null,
    };
  },
  async created() {
    this.user = await userService.getUser();
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
