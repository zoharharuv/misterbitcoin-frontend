<template>
  <section class="contact-app flex column align-center">
    <contact-filter @filterList="setFilter" />
    <contact-list @remove="removeContact" :contacts="contactsToShow" />
    <router-link to="/contact/edit">Add contact</router-link>
    <router-view />
  </section>
</template>

<script>
import contactService from "../services/contact.service.js";
import eventBus from "../services/eventBus.service.js";

import contactList from "../components/contact-list.vue";
import contactEdit from "../components/contact-edit.vue";
import contactFilter from "../components/contact-filter.vue";

export default {
  name: "contact-app",
  data() {
    return {
      contacts: [],
      filterBy: null,
    };
  },
  computed: {
    contactsToShow() {
      if (!this.filterBy) return this.contacts;
      const contactsToShow = this.contacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(this.filterBy.searchStr.toLowerCase());
      });
      return contactsToShow;
    },
  },

  methods: {
    async saveContact(contact) {
      const savedContact = await contactService.save(contact);
      this.contacts.push(savedContact);
    },
    async removeContact(id) {
      await contactService.remove(id);
      var idx = this.contacts.findIndex((contact) => contact._id === id);
      this.contacts.splice(idx, 1);
    },
    popup(msg) {
      alert(msg);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  async created() {
    this.contacts = await contactService.query();
    eventBus.$on("contactSaved", this.saveContact);
  },
  components: {
    contactList,
    contactEdit,
    contactFilter,
  },
};
</script>
