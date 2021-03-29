<template>
  <div id="home" class="" style="background-color: #e9ecef">
    <div v-if="$store.state.carga == true"
      style="height: 100vh; width: 100vw; z-index: 12000"
      class="bg-dark d-flex justify-content-center align-items-center position-fixed"
    >
      <b-iconstack font-scale="7" animation="spin">
        <b-icon
          stacked
          icon="dot"
          variant="success"
          animation="throb"
          shift-h="10"
        ></b-icon>
        <b-icon
          stacked
          icon="dot"
          variant="warning"
          animation="throb"
          shift-h="-10"
        ></b-icon>
        <b-icon
          stacked
          icon="dot"
          variant="danger"
          animation="throb"
          shift-v="10"
        ></b-icon>
        <b-icon
          stacked
          icon="dot"
          variant="primary"
          animation="throb"
          shift-v="-10"
        ></b-icon>
      </b-iconstack>
      <div class="position-fixed">
        <vue-typed-js
          class=""
          style="transform: rotate(90deg)"
          :strings="[':)']"
          :typeSpeed="180"
          :backSpeed="100"
          :loop="false"
          :showCursor="false"
        >
          <h5>
            <span
              class="typing"
              style="color: #abc; font-weight: lighter; font-style: italic"
            ></span>
          </h5>
        </vue-typed-js>
      </div>
      <div
        class="fixed-bottom text-center"
        style="color: #acd; line-height: 0.3"
      >
        <p>Proyecto Personal</p>
        <p style="font-size: 0.8em">
          by
          <strong
            ><em
              ><i class="text-success">Tripio</i>
              <i class="text-warning">Design</i></em
            ></strong
          >
        </p>
      </div>
    </div>
    <div v-else>
      <div class="mt-2">
        <br />
        <b-jumbotron
          bg-variant="dark"
          text-variant="warning"
          header="¡Bienvenidos a mi APP!"
          header-level="4"
          lead-html="<p style='font-size: .85em;'>Proyecto realizado con VueJS & Bootstrap-Vue</p>"
          class="rounded-0 m-0"
        >
          <br />
          <div class="d-sm-flex justify-content-between">
            <p class="text-light my-auto mr-2">
              Este es una aplicación web realizada con la API gratuita de Rick &
              Morty
            </p>
            <b-button
              variant="warning"
              href="#"
              class="mt-2 mx-auto d-block"
              style="max-width: 100%; width: 400px"
              >Más información</b-button
            >
          </div>
          <br />
          <div class="d-sm-flex justify-content-around">
            <b-button
              variant="outline-success"
              class=" my-3 d-block mx-auto mx-sm-1"
              style="width: 300px; max-width: 100%"
              :to="{ name: 'Personajes' }"
              >GO Personajes</b-button
            >
            <b-button
              variant="outline-success"
              class=" my-3 d-block mx-auto mx-sm-1"
              style="width: 300px; max-width: 100%"
              :to="{ name: 'Ubicaciones' }"
              >GO Ubicaciones</b-button
            >
            <b-button
              variant="outline-success"
              class=" my-3 d-block mx-auto mx-sm-1"
              style="width: 300px; max-width: 100%"
              :to="{ name: 'Episodios' }"
              >GO Episodios</b-button
            >
          </div>
        </b-jumbotron>
      </div>
      <a target="_blank" href="https://iconos8.es/icons/set/gambia-emoji">Gambia icon</a> icono de <a target="_blank" href="https://iconos8.es">Icons8</a>
        <br>
<!-- formulario crear usuario -->
      <b-form @submit="createUser" class="w-75 mx-auto">
        <h5>Crea tu cuenta</h5>
        <b-input-group 
        prepend=""
        v-model="usuario.nombre"
        class="my-2">
          <b-form-input 
          class="p-2"
          placeholder="Nombre"></b-form-input>
        </b-input-group>

        <b-input-group 
        prepend=""
        v-model="usuario.apellido"
        class="my-2">
          <b-form-input 
          class="p-2"
          placeholder="Apellido"></b-form-input>
        </b-input-group>

        <b-input-group 
        prepend=""
        v-model="usuario.correo"
        class="my-2">
          <b-form-input 
          class="p-2"
          placeholder="Correo"></b-form-input>
        </b-input-group>

        <b-input-group 
        prepend=""
        v-model="usuario.pass"
        class="my-2">
          <b-form-input 
          class="p-2"
          placeholder="* * * * * *"></b-form-input>
        </b-input-group>

      <b-button type="submit" variant="success" pill class="mx-auto d-block w-75">Crear cuenta</b-button>
      </b-form>
        <br>
      <div>
        <b-jumbotron
          class="rounded-0 py-0 pt-4"
          style=""
          header-html="<p style='font-size: .65em;'>Aplicacion de prueba</p>"
          header-level=""
          lead-html="<p style='font-size: .7em; text-align: center;'>Utilizada para aplicar conocimientos y experiencia previa.</p>"
        >
          <p style="font-size: 0.8em" class="text-right">
            Realizado por <strong class="text-success">Tripio Design</strong>
          </p>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebase/init";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      usuario:{
        uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : '',
        nombre: '',
        apellido: '',
        correo: firebase.auth().currentUser ? firebase.auth().currentUser.email : '',
        pass: '',
      },
      database: null,
    };
  },
  methods: {
    load() {
      this.$store.state.carga = true;
      setTimeout(() => {
        this.$store.state.carga = false;
      }, 1000);
    },

    createUser(){
      
    }
  },
  mounted() {
    this.load();
  },
}
</script>

<style></style>