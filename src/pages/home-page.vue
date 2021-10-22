<template>
  <section class="home-page flex column justify-center align-center">
    <div v-if="user" class="user-details">
      <h2>Welcome {{ user.name }}!</h2>
      <h3>Coins: {{ user.coins }}</h3>
      <h4>BTC: {{ btcCoins }}</h4>
      <move-list :moves="moves" />
    </div>
    <div v-if="rate" class="bitcoin-rate">
      <h2>Current rate: 1$ = {{ rate }} BTC</h2>
    </div>
  </section>
</template>

<script>
import userService from "../services/user.service";
import eventBus from "../services/eventBus.service.js";
import bitcoinService from "../services/bitcoin.service";
import MoveList from "../components/move-list";

export default {
  data() {
    return {
      user: null,
      rate: null,
      moves: null,
    };
  },
  async created() {
    this.user = await userService.getUser();
    if (!this.user) {
      this.$router.push("/signup");
      return;
    }
    this.rate = await bitcoinService.getRate();
    await this.loadMoves();
    eventBus.$on("logout", () => (this.user = null));
  },
  methods: {
    async loadMoves() {
      this.moves = await userService.getTransactions(null, 3);
    },
  },
  computed: {
    btcCoins() {
      return this.user.coins * this.rate;
    },
  },
  components: {
    MoveList,
  },
};
</script>
