<template>
  <section @click.stop="sayHey" class="contact-preview">
    <pre>{{ contact }}</pre>
    <hr />
    <router-link :to="`/contact/${contact._id}`">Details</router-link>
  </section>
</template>

<script>
export default {
  name: "contact-preview",
  props: ["contact"],
  methods: {
    sayHey() {
      console.log("Hey");
    },
  },
};
</script>