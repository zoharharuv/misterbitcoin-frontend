<template>
  <ul class="contact-list clean flex align-center justify-center wrap column">
    <li class="contact-container flex column" v-for="(contact, idx) in contacts" :key="idx">
      <contact-preview :contact="contact" />
      <div class="contact-actions flex space-between align-center">
        <button @click="printContact(contact, $event)">Print Log</button>
        <button @click="remove(contact._id)">Remove</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { showUserMsg } from "../services/eventBus.service";

import contactPreview from "./contact-preview.vue";

export default {
  props: ["contacts"],
  methods: {
    printContact(contact, ev) {
      console.log(contact, ev);
      showUserMsg("Printed", "danger");
    },
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
