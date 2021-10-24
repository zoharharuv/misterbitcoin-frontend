<template>
  <section v-if="moves" class="move-list flex column">
    <ul v-if="moves.length !== 0" class="flex column clean">
      <h3>Last moves:</h3>
      <li
        class="move-preview flex align-center column"
        v-for="(move, idx) in moves"
        :key="idx"
      >
        <div class="move-container flex align-center gap">
          <span>{{ move.to }} </span>
          <span>{{ move.amount }}$ </span>
          <span>{{ getDate(move.at) }} <span class="far fa-clock" /></span>
        </div>
        <hr style="width: 100%" />
      </li>
    </ul>
  </section>
</template>

<script>
import { Utils } from "../services/utils.service";
export default {
  props: {
    moves: Array,
  },
  methods: {
    getDate(date) {
      return Utils.timeSince(date);
    },
  },
};
</script>
