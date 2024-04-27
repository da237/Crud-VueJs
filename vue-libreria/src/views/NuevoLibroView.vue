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
      <button class="btn enviar" type="submit">Crear Nuevo Libro</button>
    </form>
  </main>
</template>

<style scoped>

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