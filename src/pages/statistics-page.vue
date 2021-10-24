<template>
  <section class="statistics-page flex column">
    <div class="chart-container flex column" v-if="marketprice">
      <h2>{{ marketprice.name }}</h2>
      <h4>{{ marketprice.description }}</h4>
      <line-chart v-if="marketprice" :data="marketprice" />
    </div>
    <div class="chart-container" v-if="transactions">
      <h2>{{ transactions.name }}</h2>
      <h4>{{ transactions.description }}</h4>
      <line-chart v-if="transactions" :data="transactions" />
    </div>
  </section>
</template>

<script>
import bitcoinService from "../services/bitcoin.service";

import LineChart from "@/components/chart";

export default {
  data() {
    return {
      marketprice: null,
      transactions: null,
    };
  },
  created() {
    this.loadChartsData();
  },
  methods: {
    async loadChartsData() {
      this.marketprice = await bitcoinService.getMarketPrice();
      this.transactions = await bitcoinService.getConfirmedTransactions();
    },
  },
  components: {
    LineChart,
  },
};
</script>

