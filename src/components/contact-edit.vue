<template>
  <section>
    <button @click="close" class="close-btn">X</button>
    <form class="contact-edit column-layout" @submit.prevent="saveContact">
      <input v-model.trim="contactToEdit.name" type="text" placeholder="name" />
      <input
        v-model.trim="contactToEdit.email"
        type="text"
        placeholder="email"
      />
      <input
        v-model.trim="contactToEdit.phone"
        type="text"
        placeholder="phone"
      />
      <button>Save!</button>
      {{ contactToEdit }}
    </form>
  </section>
</template>

<script>
import contactService from "../services/contact.service.js";
import eventBus from "../services/eventBus.service.js";

export default {
  name: "contact-edit",
  data() {
    return {
      contactToEdit: contactService.getEmptyContact(),
    };
  },
  methods: {
    saveContact() {
      console.log(this.contactToEdit);
      // this.$emit('contactAdded', this.contactToEdit);
      eventBus.$emit("contactSaved", this.contactToEdit);
      this.contactToEdit = contactService.getEmptyContact();
    },
    close() {
      this.$router.push("/contact");
    },
  },
};
</script>