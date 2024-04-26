<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {

    const router = useRouter ();


    const editarLibro = ref({
        id:null,
      title: "",
      autor: "",
      ISBN: "",
      genero: "",
      precio: "",
      disponibilidad: "",
    });

    const cargarLibro = async ()=>{
        const libroId = useRoute().params.id;
        try {
            const response = await axios.get(`http://localhost:3000/Libros/${libroId}`);
            editarLibro.value = response.data;
            console.log(editarLibro.value);
        } catch (error) {
            console.log("Error al cargar el libro",error);
        }
    }

    const actualizarLibro = async () => {
    };

    onMounted(() => {
      cargarLibro();
    });

    return editarLibro,cargarLibro;
  }
};
</script>

<template>
  <main>
    <form @submit.prevent="actualizarLibro">
      <div>
        <div>
          <input
            v-model="editarLibro.title"
            type="text"
            required
            placeholder="Titulo"
          />
        </div>

        <div>
          <input
            v-model="editarLibro.autor"
            type="text"
            required
            placeholder="Autor"
          />
        </div>

        <div>
          <input
            v-model="editarLibro.ISBN"
            type="text"
            required
            placeholder="ISBN"
          />
        </div>

        <div>
          <input
            v-model="editarLibro.genero"
            type="text"
            required
            placeholder="Genero"
          />
        </div>
        <div>
          <input
            v-model="editarLibro.precio"
            type="text"
            required
            placeholder="Precio"
          />
        </div>
        <div>
          <input
            v-model="editarLibro.disponibilidad"
            type="text"
            required
            placeholder="Disponibilidad"
          />
        </div>
      </div>
      <button type="submit">Actualizar Libro</button>
    </form>
  </main>
</template>
<style>
</style>