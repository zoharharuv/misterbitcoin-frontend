<template>
  <section class="contact-list clean flex align-center justify-center column">
    <div
      class="contact-container flex space-between align-center"
      v-for="(contact, idx) in contacts"
      :key="idx"
    >
      <contact-preview :contact="contact" />
      <div class="contact-actions flex gap align-center">
        <button @click="remove(contact._id)">Remove</button>
      </div>
    </div>
  </section>
</template>

<script>
import { showUserMsg } from "../services/eventBus.service";

import contactPreview from "./contact-preview.vue";

export default {
  props: ["contacts"],
  methods: {
    remove(id) {
      this.$emit("remove", id);
      showUserMsg("Removed");
    },
  },
  components: {
    contactPreview,
  },
};
</script>
