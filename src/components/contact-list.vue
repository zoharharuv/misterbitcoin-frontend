<template>
  <ul class="contacts-list clean-list flex align-center justify-center wrap">
    <li class="contact-container" v-for="(contact, idx) in contacts" :key="idx">
      <contact-preview :contact="contact" />
      <div class="actions flex space-between align-center">
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
  name: "contact-list",
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
