<template>
  <section class="contact-app flex column align-center gap">
    <contact-filter @filterList="setFilter" />
    <contact-list @remove="removeContact" :contacts="contactsToShow" />
    <router-link to="/contact/edit">Add contact +</router-link>
    <router-view />
  </section>
</template>

<script>
import contactService from "../services/contact.service.js";

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
    async removeContact(id) {
      await contactService.remove(id);
      var idx = this.contacts.findIndex((contact) => contact._id === id);
      this.contacts.splice(idx, 1);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    async loadContacts() {
      this.contacts = await contactService.query();
    },
  },
  async created() {
    this.loadContacts();
  },
  components: {
    contactList,
    contactEdit,
    contactFilter,
  },
};
</script>
