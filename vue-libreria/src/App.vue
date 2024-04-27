<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      
      <nav class="navbar">
        <RouterLink class="link--navbar" to="/">Libros</RouterLink>
        <RouterLink class="link--navbar" to="/nuevoLibro">Nuevo Libros</RouterLink>
      </nav>
    </div>
    <RouterView/>
  </header>
</template>

<style scoped>

.navbar {
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  width: 300px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
}

.link--navbar{
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 1.3rem;
  color: #181818;
  transition: color 03s ease-in-out;
}

.link--navbar:hover {
  color: #000;
}

</style>
