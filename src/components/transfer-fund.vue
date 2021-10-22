<template>
  <section class="transfer-fund flex column gap">
    <form @submit.prevent="transfer">
      <input v-model="coins" type="number" name="coins" />
      <button >Transfer BTCs</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ["transferCoins"],
  data() {
    return {
      coins: 1,
    };
  },
  async created() {},
  methods: {
    transfer() {
      this.transferCoins(this.coins);
      this.coins = 1;
    },
  },
};
</script>