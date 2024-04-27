<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const editarLibro = ref({
      id: null,
      title: "",
      autor: "",
      ISBN: "",
      genero: "",
      precio: "",
      disponibilidad: "",
    });

    const cargarLibro = async () => {
      const libroId = useRoute().params.id;
      try {
        const response = await axios.get(
          `http://localhost:3000/Libros/${libroId}`
        );
        editarLibro.value = response.data;
        console.log(editarLibro.value);
      } catch (error) {
        console.log("Error al cargar el libro", error);
      }
    };

    const actualizarLibro = async () => {
      try {
        await axios.put(
          `http://localhost:3000/Libros/${editarLibro.value.id}`,
          editarLibro.value
        );
        setTimeout(() => {
          alert("Libro Editado con Exito");
        }, 500);
        router.push("/");
      } catch (error) {
        console.error("Error al momento de actualizar el libro", error);
      }
    };

    onMounted(() => {
      cargarLibro();
    });

    return {
      editarLibro,
      actualizarLibro,
      cargarLibro,
    };
  },
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
      <button class="btn enviar" type="submit">Actualizar Libro</button>
    </form>
  </main>
</template>

<style scope>
form {
  width: 90%;
  margin: 25px auto;
  padding: 20px;
  border: solid 1px #000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 1.1rem;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #000;
  margin-bottom: 15px;
  font-family: "Wix Madefor Text", sans-serif;
  font-size: 1.1rem;
}

input:focus{
  outline: none;
}

.btn {
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  text-decoration: none;
  font-family: "Wix Madefor Text", sans-serif;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: 100%;
}

.enviar {
  margin-top: 10px;
  background-color: green;
  color: #fff;
}

.enviar:hover {
  background-color: rgb(1, 98, 1);
  color: #fff;
}
</style>