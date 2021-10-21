<template>
  <section @click.stop="sayHey" class="chart">
    <h1>chart</h1>
  </section>
</template>

<script>
export default {
  name: "chart",
  methods: {
    sayHey() {
      console.log("Hey");
    },
  },
};
</script>