<template>
  <section class="move-list flex column gap">
    <h3>Your moves:</h3>
    <ul class="flex column clean gap">
      <li
        class="flex column center-center"
        v-for="(move, idx) in moves"
        :key="idx"
      >
        <span>To: {{ move.to }}</span>
        <span>At: {{ new Date(move.at).toLocaleDateString("he-IL") }}</span>
        <span>Amount: {{ move.amount }} coins</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["moves"],
  data() {
    return {};
  },
  async created() {},
  methods: {},
};
</script>
