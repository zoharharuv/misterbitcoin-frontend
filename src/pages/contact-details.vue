<template>
  <section class="contact-details" v-if="contact">
    <h1>Contact Details - {{ contact.name }}</h1>
    <router-link :to="`/contact/${nextContactId}`">Next Contact</router-link>
    <pre>{{ contact }}</pre>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
import { showUserMsg } from "../services/eventBus.service";
export default {
  data() {
    return {
      contact: null,
      nextContactId: "xxx",
    };
  },
  created() {
    this.loadContact();
  },
  destroyed() {
    console.log("Contact Details Destroyed");
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
