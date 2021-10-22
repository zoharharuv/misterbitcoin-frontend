<template>
  <section class="statistics-page flex column">
    <div class="chart-container flex column" v-if="marketprice">
      <h2>{{ marketprice.name }}</h2>
      <h3>{{ marketprice.description }}</h3>
      <line-chart v-if="marketprice" :data="marketprice" />
    </div>
    <div class="chart-container" v-if="confirmedtransactions">
      <h2>{{ confirmedtransactions.name }}</h2>
      <h3>{{ confirmedtransactions.description }}</h3>
      <line-chart v-if="confirmedtransactions" :data="confirmedtransactions" />
    </div>
  </section>
</template>

<script>
import LineChart from "@/components/chart";
import bitcoinService from "../services/bitcoin.service";
export default {
  data() {
    return {
      marketprice: null,
      confirmedtransactions: null,
    };
  },
  created() {
    this.loadChartsData();
  },
  methods: {
    async loadChartsData() {
      this.marketprice = await bitcoinService.getMarketPrice();
      this.confirmedtransactions =
        await bitcoinService.getConfirmedTransactions();
    },
  },
  components: {
    LineChart,
  },
};
</script>

