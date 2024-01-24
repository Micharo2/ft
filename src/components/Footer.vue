<template>
  <footer class="footer">
    <div class="content">
      <p>&copy; {{ currentYear }} Váš Hotel. Všetky práva vyhradené.</p>
      <p>Hlavná 123, 987 65 Bratislava</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}


</style>
