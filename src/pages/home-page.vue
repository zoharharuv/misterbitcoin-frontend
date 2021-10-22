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
import eventBus from "../services/eventBus.service.js";
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
    if(!this.user){
      this.$router.push("/signup");
      return
    }
    this.rate = await bitcoinService.getRate();
    eventBus.$on("logout", () => this.user = null);
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
