<template>
  <div id="home" class="" style="overflow-y: auto" :style="{height: (height-57)+'px'}">
    <div class="">
      <div
        v-if="$store.state.carga == true"
      >
        <Carga/>
      </div>
      <div v-else>
        <div class="">
          <b-jumbotron
            bg-variant="dark"
            text-variant="warning"
            header="¡Bienvenidos a mi APP!"
            header-level="4"
            lead-html="<p style='font-size: .85em;'>Proyecto realizado con VueJS & Bootstrap-Vue</p>"
            class="rounded-0 m-0 pb-1"
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
                pill
                variant="outline-success"
                class="my-3 d-block mx-auto mx-sm-1 border-0 rounded"
                style="width: 300px; max-width: 100%"
                :to="{ name: 'Personajes' }"
                >GO Personajes</b-button
              >
              <b-button
                pill
                variant="outline-success"
                class="my-3 d-block mx-auto mx-sm-1 border-0 rounded"
                style="width: 300px; max-width: 100%"
                :to="{ name: 'Ubicaciones' }"
                >GO Ubicaciones</b-button
              >
              <b-button
                pill
                variant="outline-success"
                class="my-3 d-block mx-auto mx-sm-1 border-0 rounded"
                style="width: 300px; max-width: 100%"
                :to="{ name: 'Episodios' }"
                >GO Episodios</b-button
              >
            </div>
          </b-jumbotron>
        </div>
        <br />
        <!-- formulario crear usuario -->
        <b-form @submit="createUser" class="w-75 mx-auto">
          <h5>Crea tu cuenta</h5>
          <b-input-group prepend="" v-model="usuario.nombre" class="my-2">
            <b-form-input class="p-2" placeholder="Nombre"></b-form-input>
          </b-input-group>

          <b-input-group prepend="" v-model="usuario.apellido" class="my-2">
            <b-form-input class="p-2" placeholder="Apellido"></b-form-input>
          </b-input-group>

          <b-input-group prepend="" v-model="usuario.correo" class="my-2">
            <b-form-input class="p-2" placeholder="Correo"></b-form-input>
          </b-input-group>

          <b-input-group prepend="" v-model="usuario.pass" class="my-2">
            <b-form-input class="p-2" placeholder="* * * * * *"></b-form-input>
          </b-input-group>

          <b-button
            type="submit"
            variant="success"
            pill
            class="mx-auto d-block w-75"
            >Crear cuenta</b-button
          >
        </b-form>
        <br />
        <div>
          <b-jumbotron
            class="rounded-0 py-0 pt-4"
            style=""
            header-html="<p style='font-size: .65em;'>Aplicacion de prueba</p>"
            header-level=""
            lead-html="<p style='font-size: .7em; text-align: center;'>Utilizada para aplicar conocimientos y experiencia previa.</p>"
          >
            <p style="font-size: 0.8em" class="text-right">
              Realizado por <strong class="text-success">Tripio</strong>
              <strong class="text-warning">Design</strong>
            </p>
          </b-jumbotron>
        </div>
      </div>
    </div>


    <b-alert show class="bg-success">
      <h1>Hola mundo</h1>
    </b-alert>

  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebase/init";
import Data from "../servicios/ramapi";

import Carga from "@/components/Carga";

export default {
  name: "Home",
  components: {
    Carga
  },
  data() {
    return {
      width: this.$store.state.window.width,
      height: this.$store.state.window.height,
      apiCharacters: "",
      apiEpisodes: "",
      apiLocations: "",
      usuario: {
        uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : "",
        nombre: "",
        apellido: "",
        correo: firebase.auth().currentUser
          ? firebase.auth().currentUser.email
          : "",
        pass: "",
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
    urls() {
      const data = new Data();
      data
        .getData()
        .then((res) => res.json())
        .then((res) => {
          this.apiCharacters = res.characters;
          this.apiEpisodes = res.episodes;
          this.apiLocations = res.locations;
          // console.log(this.apiCharacters);
          // console.log(this.apiEpisodes);
          // console.log(this.apiLocations);
        });
    },

    createUser() {},
  },
  mounted() {
    // console.log(this.$store.state.window.width);
    // console.log(this.$store.state.window.height);
    this.load();
    this.urls();
  },
  destroyed() {
    
  },
};
</script>

<style></style>
