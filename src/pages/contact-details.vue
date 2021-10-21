<template>
  <section class="contact-details flex column gap align-center" v-if="contact">
    <h1>{{ contact.name }} profile</h1>
    <pre>{{ contact }}</pre>
    <div class="contact-links flex gap">
      <router-link to="/contact">Back</router-link>
      <router-link :to="`/contact/edit/${contact._id}`">Edit profile</router-link>
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
import { showUserMsg } from "../services/eventBus.service";
export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    this.loadContact();
  },
  destroyed() {
  },
  methods: {
    async loadContact() {
      try {
        const { contactId } = this.$route.params;
        console.log("Contact Details Created", contactId);
        this.contact = await contactService.get(contactId);
      } catch (err) {
        showUserMsg("No such Contact", "danger");
        this.contact = null;
      }
    },
  },
  watch: {
    "$route.params.contactId"(id) {
      console.log("Route was changed", id);
      this.loadContact();
    },
  },
};
</script>
