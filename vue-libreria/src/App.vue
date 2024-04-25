<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Libros</RouterLink>
        <RouterLink to="/nuevoLibro">Nuevo Libros</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
