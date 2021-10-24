<template>
  <section v-if="moves" class="move-list flex column">
    <ul v-if="moves.length !== 0" class="flex column clean">
    <h3 >Last moves:</h3>
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
  props: {
    moves: Array,
  },
};
</script>
