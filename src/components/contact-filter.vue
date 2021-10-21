<template>
  <form class="contact-filter">
    <input
      @input="filter"
      type="text"
      placeholder="Search contacts"
      v-model="filterBy.searchStr"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        searchStr: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filterList", { ...this.filterBy });
    },
  },
};
</script>