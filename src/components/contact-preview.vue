<template>
  <section class="contact-preview">
    <img :src="`https://robohash.org/${contact.name}`" alt="" srcset="">
    <pre>{{ contact }}</pre>
    <hr />
    <router-link :to="`/contact/${contact._id}`">{{contact.name}} profile</router-link>
  </section>
</template>

<script>
export default {
  props: ["contact"],
  methods: {
    
  },
};
</script>