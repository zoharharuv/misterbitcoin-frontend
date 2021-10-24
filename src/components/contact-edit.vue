<template>
  <section v-if="contactToEdit" class="contact-edit flex column gap">
    <button @click="close" class="close-btn">X</button>
    <form class="flex column align-center gap" @submit.prevent="saveContact">
      <input v-model.trim="contactToEdit.name" type="text" placeholder="Fullname" />
      <input
        v-model.trim="contactToEdit.email"
        type="text"
        placeholder="Email"
      />
      <input
        v-model.trim="contactToEdit.phone"
        type="text"
        placeholder="Phone"
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

export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params;
    try {
      this.contactToEdit = contactId
        ? await contactService.get(contactId)
        : contactService.getEmptyContact();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async saveContact() {
      await contactService.save(this.contactToEdit);
      this.$router.push("/contact");
    },
    close() {
      this.$router.push("/contact");
    },
  },
};
</script>