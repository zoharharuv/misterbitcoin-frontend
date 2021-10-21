<template>
  <section v-if="contactToEdit" class="contact-edit flex column gap">
    <button @click="close" class="close-btn">X</button>
    <form class="flex column align-center gap" @submit.prevent="saveContact">
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
    </form>
  </section>
  <section v-else>
    <h1>No such contact</h1>
  </section>
</template>

<script>
import contactService from "../services/contact.service.js";
import eventBus from "../services/eventBus.service.js";

export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params;
    try {
      this.contactToEdit = await contactService.get(contactId);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    saveContact() {
      console.log(this.contactToEdit);
      // this.$emit('contactAdded', this.contactToEdit);
      eventBus.$emit("contactSaved", this.contactToEdit);
    },
    close() {
      this.$router.push("/contact");
    },
  },
};
</script>