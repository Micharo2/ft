<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
    <header>
      <img alt="Logo hotela" class="logo" src="@/assets/logo.png" width="125" height="125" />
      <Navbar />
    </header>
    <RouterView/>
   <Footer />
  </div>
</template>
<style>

.container {
  width: 100%;
}

</style>

