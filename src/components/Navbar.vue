<template>
  <nav>
    <ul>
      <li><router-link to="/">Domov</router-link></li>
      <li><router-link to="/rooms">Izby</router-link></li>
      <li><router-link to="/about">O nás</router-link></li>
      <li><router-link to="/booking">Rezervácia</router-link></li>
      <li><router-link to="/contact">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 70px;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

</style>
