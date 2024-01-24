<template>
  <div class="contact-page">
    <h1>Máte otázky alebo pripomienky? Neváhajte nás kontaktovať.</h1>
    <ContactInfo />
  </div>
</template>

<script>
import ContactInfo from '../components/ContactInfo.vue';

export default {
  components: {
    ContactInfo
  }
};
</script>

<style>
.contact-page {
  text-align: center;
}


</style>