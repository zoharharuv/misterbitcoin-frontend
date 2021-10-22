<template>
  <section class="contact-details flex column gap align-center" v-if="contact">
    <h1>{{ contact.name }} profile</h1>
    <pre>{{ contact }}</pre>
    <transfer-fund :transferCoins="transferCoins" />
    <move-list :moves="moves" />
    <div class="contact-links flex gap">
      <router-link to="/contact">Back</router-link>
      <router-link :to="`/contact/edit/${contact._id}`"
        >Edit profile</router-link
      >
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
import { showUserMsg } from "../services/eventBus.service";

import TransferFund from "../components/transfer-fund";
import MoveList from "../components/move-list";
import userService from "../services/user.service";

export default {
  components: {
    TransferFund,
    MoveList,
  },
  data() {
    return {
      contact: null,
      moves: null,
    };
  },
  async created() {
    await this.loadContact();
    await this.loadMoves();
  },
  destroyed() {},
  methods: {
    async loadContact() {
      try {
        const { contactId } = this.$route.params;
        this.contact = await contactService.get(contactId);
      } catch (err) {
        showUserMsg("No such Contact", "danger");
        this.contact = null;
      }
    },
    async transferCoins(coins) {
      await userService.addMove(this.contact, coins);
      await this.loadMoves();
    },
    async loadMoves() {
      this.moves = await userService.getTransactions(this.contact);
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
