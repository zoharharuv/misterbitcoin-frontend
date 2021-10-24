<template>
  <section
    v-if="user"
    class="home-page flex column justify-center align-center"
  >
    <div class="user-details">
      <h2>Welcome {{ user.fullname }}!</h2>
      <h3>Coins: {{ user.coins }}$</h3>
      <h4>BTC value: {{ btcCoins }}</h4>
      <move-list :moves="moves" />
    </div>
    <div v-if="rate" class="bitcoin-rate">
      <h3>Current rate: 1$ = {{ rate }} BTC</h3>
    </div>
  </section>
  <section v-else class="flex center-center">
    <h1>Login or signup first!</h1>
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
    this.user = await userService.getLoggedInUser();
    if (this.user) {
      await this.loadMoves();
    }
    eventBus.$on("logout", () => (this.user = null));
    eventBus.$on("login", async (loggedUser) => {
      this.user = loggedUser;
    });
  },
  methods: {
    async loadMoves() {
      this.rate = await bitcoinService.getRate();
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
