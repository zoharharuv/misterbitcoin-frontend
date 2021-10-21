<template>
  <section class="home-page flex column justify-center align-center">
    <div v-if="user" class="user-details">
      <h2>{{ user.name }}</h2>
      <h3>Site coins: {{ user.coins }}</h3>
      <h4>Your BTCs: {{btcCoins}}</h4>
    </div>
    <div v-if="rate" class="bitcoin-rate">
      <h2>Rate: {{ rate }} BTC</h2>
    </div>
  </section>
</template>

<script>
import userService from "../services/user.service";
import bitcoinService from "../services/bitcoin.service";

export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },
  async created() {
    this.user = await userService.getUser();
    this.rate = await bitcoinService.getRate();
  },
  methods: {},
  computed: {
    btcCoins(){
      return this.user.coins * this.rate;
    }
  },
  watch: {},
};
</script>
