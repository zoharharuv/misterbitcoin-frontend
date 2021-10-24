<template>
  <form @submit.prevent="transfer" class="transfer-fund flex column gap">
    <input v-model="coins" type="number" name="coins" />
    <button>Transfer coins</button>
  </form>
</template>

<script>
export default {
  props: ["transferCoins"],
  data() {
    return {
      coins: 1,
    };
  },
  methods: {
    transfer() {
      this.transferCoins(this.coins);
      this.coins = 1;
    },
  },
};
</script>