<template>
  <section class="app">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";

export default {
  name: "root-cmp",
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {
    print() {
      console.log("keyup!");
    },
  },
  components: {
    appHeader,
  },
};
</script>
