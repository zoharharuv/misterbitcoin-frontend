<template>
  <section class="statistics-page">
    <h1>This is an statistics page</h1>
    <div class="map" ref="elMap"></div>
    <input type="text" ref="elTxt" />
    <button @click="goThere">Go There</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log("Mounted: this.$refs", this.$refs);
    const { elTxt } = this.$refs;
    elTxt.focus();
  },
  methods: {
    goThere() {
      const { elMap } = this.$refs;
      console.log("Going", elMap);
      this.elType = this.elType === "h1" ? "h3" : "h1";
    },
  },
};
</script>

