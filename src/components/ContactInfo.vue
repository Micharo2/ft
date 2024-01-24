<template>
  <div class="contact-info">
    <h2>Kontaktné informácie</h2>
    <p><strong>Telefón:</strong> +421 123 456 789</p>
    <p><strong>Email:</strong> info@hotel.sk</p>
    <p><strong>Adresa:</strong> Hlavná 123, 987 65 Bratislava</p>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
};
</script>

<style>
.contact-info {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.contact-info h2 {
  text-align: center;
}

.contact-info p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>