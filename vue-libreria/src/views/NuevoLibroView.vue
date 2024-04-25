<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const nuevoLibro = ref({
      title: "",
      autor: "",
      ISBN: "",
      genero: "",
      precio: "",
      disponibilidad: "",
    });

    const CrearLibro = async ()=>{
        try {
            const response = await axios.post("http://localhost:3000/Libros",nuevoLibro.value);
            setTimeout(() => {
               alert("libro Creado con Exito"); 
            }, 200);
            nuevoLibro.value.title= "",
            nuevoLibro.value.autor= "",
            nuevoLibro.value.ISBN= "",
            nuevoLibro.value.genero= "",
            nuevoLibro.value.precio= "",
            nuevoLibro.value.disponibilidad= ""

            console.log("Libro creado con exito",response.data)
        } catch (error) {
            console.log("Error al momento de crear el libro",error)
        }
    };
    return {
      nuevoLibro,
      CrearLibro
    };
  },
};
</script>

<template>
  <main>
    <form @submit.prevent="CrearLibro">
      <div>
        <div>
          <input
            v-model="nuevoLibro.title"
            type="text"
            required
            placeholder="Titulo"
          />
        </div>

        <div>
          <input
            v-model="nuevoLibro.autor"
            type="text"
            required
            placeholder="Autor"
          />
        </div>

        <div>
          <input
            v-model="nuevoLibro.ISBN"
            type="text"
            required
            placeholder="ISBN"
          />
        </div>

        <div>
          <input
            v-model="nuevoLibro.genero"
            type="text"
            required
            placeholder="Genero"
          />
        </div>
        <div>
          <input
            v-model="nuevoLibro.precio"
            type="text"
            required
            placeholder="Precio"
          />
        </div>
        <div>
          <input
            v-model="nuevoLibro.disponibilidad"
            type="text"
            required
            placeholder="Disponibilidad"
          />
        </div>
      </div>
      <button type="submit">Crear Nuevo Libro</button>
    </form>
  </main>
</template>

<style scoped>
</style>