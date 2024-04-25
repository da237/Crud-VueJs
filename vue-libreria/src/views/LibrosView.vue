<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const libros = ref([]);

    const listarLibros = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Libros");
        libros.value = response.data;
        console.log(libros.value);
      } catch (error) {
        console.log("Error al leer los libros del endpoint", error);
      }
    };

    const eliminarLibro = async (id, title) => {
      const confirmDelete = window.confirm(
        `Estas seguro de eliminar el libro " ${title}`
      );
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/Libros/${id}`);
          listarLibros();
        } catch (error) {
          console.error("Error al eliminar el libro", error);
        }
      }
    };

    onMounted(() => {
      listarLibros();
    });

    return {
      libros,
      listarLibros,
      eliminarLibro,
    };
  },
};
</script>

<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>ISBN</th>
          <th>Genero</th>
          <th>Precio</th>
          <th>Disponibilidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros" key="libro.id">
          <hd>{{ libro.id }}</hd>
          <hd>{{ libro.title }}</hd>
          <hd>{{ libro.autor }}</hd>
          <hd>{{ libro.ISBN }}</hd>
          <hd>{{ libro.genero }}</hd>
          <hd>{{ libro.precio }}</hd>
          <hd>{{ libro.disponibilidad }}</hd>
          <div>
            <button @click="eliminarLibro(libro.id, libro.title)">
              Eliminar
            </button>
          </div>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
</style>