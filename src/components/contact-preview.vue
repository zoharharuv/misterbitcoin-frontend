<template>
  <section class="contact-preview flex align-center gap">
    <img :src="`https://robohash.org/${contact.name}`" alt="" srcset="" />
    <router-link :to="`/contact/${contact._id}`"
      >{{ contact.name }} profile</router-link
    >
  </section>
</template>

<script>
export default {
  props: ["contact"],
};
</script>