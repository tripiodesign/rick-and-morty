<template>
  <div
    id="personajes"
    style="background-color: #e9ecef"
    class="w-100"
    :class="{ 'position-fixed': this.$store.state.window.width > 767 }"
  >
    <div
      v-if="$store.state.carga == true"
      style="transition: all 1000ms linear"
      transition="fade"
    >
      <Carga />
    </div>
    <div v-else class="d-md-flex justify-content-between">
      <div
        class="d-none d-md-block m-0 border-right w-100"
        style="min-width: 200px; max-width: 25%"
        role="tablist"
      >
        <br /><br />
        <div class="accordion">
          <b-card class="bg-transparent border-0">
            <b-button
              v-b-toggle.seccion1
              block
              square
              variant="outline-dark"
              class="rounded-top mb-2"
              >Personajes</b-button
            >
            <b-collapse
              id="seccion1"
              class="overflow-auto"
              style="max-height: 50vh; max-width: 100%"
            >
              <b-navbar class="flex-column p-1">
                <b-nav
                  v-for="(idpj, i) in personajes"
                  :key="idpj.id"
                  class="w-100 py-0 my-1 bg-warning text-dark border border-light"
                >
                  <b-link
                    v-if="idpj.id == i + 1"
                    :href="'#personaje' + i"
                    style="color: white; font-size: 0.8em; margin-left: -40px"
                    class="py-2 pl-5 pr-4 bg-success rounded-pill"
                  >
                    {{ idpj.name }}
                  </b-link>
                </b-nav>
              </b-navbar>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <div
        id="containerPj"
        class="w-100"
        :class="{
          'overflow-auto': this.$store.state.window.width > 767,
          'largo-max': this.$store.state.window.width > 767,
          '': this.$store.state.window.width < 768,
        }"
        :style="{
          height: this.$store.state.window.width > 767 ? '99.5vh' : '100%',
        }"
      >
        <b-card
          v-for="(personaje, index) in personajes"
          :key="personaje.id"
          :id="'personaje' + index"
          bg-variant="transparent"
          style="max-width: 650px"
          class="my-3 p-0 mx-0 mx-auto rounded-0 border-top-0 border-left-0 border-right-0 border-bottom"
        >
          <br /><br />
          <img
            :src="personaje.image"
            style="width: 256px; max-width: 90%"
            class="d-block mx-auto rounded border-dotted rounded-"
          />
          <br />
          <b-badge
            variant="dark"
            class="text-right text-warning d-block p-3"
            style="font-size: 1.3em"
            >{{ personaje.name }}</b-badge
          >
          <br />
          <div class="d-flex justify-content-around">
            <p
              class="p-2 text-dark bg-warning rounded-pill"
              style="font-size: 0.6em"
            >
              <strong>Tipo:</strong> {{ personaje.species }}
            </p>
            <p
              class="p-2 text-dark bg-warning rounded-pill"
              style="font-size: 0.6em"
            >
              <strong>Sexo:</strong> {{ personaje.gender }}
            </p>
            <p
              class="p-2 text-dark bg-warning rounded-pill"
              style="font-size: 0.6em"
            >
              <strong>Estado:</strong> {{ personaje.status }}
            </p>
          </div>
          <b-container class="mb-4">
            <b-link class="text-dark d-block my-3" style="font-size: 1rem"
              ><strong class="text-success">Origen:</strong>
              {{ personaje.origin.name }} <i class="fas fa-map-marker-alt"></i
            ></b-link>
            <b-link class="text-dark d-block my-3" style="font-size: 1rem"
              ><strong class="text-success">Ubicación:</strong>
              {{ personaje.location.name }} <i class="fas fa-map-marker-alt"></i
            ></b-link>
          </b-container>
          <b-card
            no-body
            class="border-0 border-botom mx-auto d-block"
            style="max-width: 90%"
          >
            <b-card-header class="p-0 border-0">
              <b-button
                block
                v-b-toggle="'box' + index"
                variant="outline-danger"
                style="
                  border-bottom-left-radius: 0;
                  border-bottom-right-radius: 0;
                "
                class="text-left d-flex justify-content-between align-items-center m-0"
                >Episodios <b-icon icon="collection-play"></b-icon>
              </b-button>
            </b-card-header>
            <b-collapse :id="'box' + index" class="border-0">
              <b-card-body
                class="overflow-auto border-bottom border-dark rounded-bottom"
                style="max-height: 800px"
              >
                <b-list-group
                  class="my-2"
                >
                  <!-- <li><a class="text-success" :href="personaje.episode[i]">Capitulo {{i+1}}</a></li> -->
                  <b-list-group-item
                    class="border-top-0 border-right-0 border-left-0 rounded-0 p-0 pl-1"
                    id=""
                  >
                    <b-badge
                      variant="dark"
                      class="d-block text-warning ml-auto my-0 p-2"
                      style="
                        width: 50%;
                        max-width: 100px;
                        font-size: 1em;
                        font-weight: lighter;
                      "
                      >Cap</b-badge
                    >
                    <b-alert show class="rounded-0 my-1" variant="success">
                      <p>Revisa el capitulo</p>
                      <b-button
                        :to="{
                          name: 'Episodio',
                          pagina: 1,
                          params: {
                            apis: '',
                          },
                        }"
                        variant="outline-dark"
                        pill
                        style=""
                        class="d-flex justify-content-between align-items-center"
                        >Más <b-icon icon="play-circle"></b-icon>
                      </b-button>
                    </b-alert>
                  </b-list-group-item>
                </b-list-group>
                <b-button
                  v-b-toggle="'box' + index"
                  variant="warning"
                  class="fixed-bottom ml-auto mr-4 mb-4 mx-md-auto rounded-circle"
                  style="width: 50px; height: 50px"
                >
                  <b-icon icon="arrows-angle-contract"></b-icon>
                </b-button>
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-card>
      </div>
 
 <!-- Revisa más... -->
      <div
        class="mt-4 mx-auto"
        style="
          min-width: 250px;
          width: 500px;
          max-width: 25%;
          min-height: 280px;
        "
      >
        <vue-typed-js
          class=""
          :strings="[
            'Revisa también...',
            'Los episodios de la serie...',
            'Las ubicaciones de cada personaje...',
            'Detalles y más información del sitio...',
          ]"
          :typeSpeed="80"
          :backSpeed="100"
          :backDelay="2500"
          :loop="true"
          :cursorChar="'|'"
        >
          <h2 class="text-warning ml-4 mr-1 mt-5">
            <span
              class="typing text-secondary"
              style="font-weight: lighter; font-style: italic"
            ></span>
          </h2>
        </vue-typed-js>
        <div class="flex-column justify-content-center p-0 m-0" style="font-size: .8em">
          <b-alert show variant="primary">
            <h5>Home</h5>
            <p>Información del sitio y sus secciones</p>
            <b-link
            class="text-center text-danger border border-danger m-0 p-1 d-block"
            :to="{ name: 'Home' }"
            ><i>ver más...</i></b-link>
          </b-alert>
          <b-alert show variant="primary">
            <h5>Episodios</h5>
            <p>Encuentra información de los episodios</p>
            <b-link
            class="text-center text-danger border border-danger m-0 p-1 d-block"
            :to="{ name: 'Episodios' }"
            ><i>ver más...</i></b-link>
          </b-alert>
          <b-alert show variant="primary">
            <h5>Ubicaciones</h5>
            <p>Las ubicaciones y origenes de los personajes</p>
            <b-link
            class="text-center text-danger border border-danger m-0 p-1 d-block"
            :to="{ name: 'Ubicaciones' }"
            ><i>ver más...</i></b-link>
          </b-alert>
        </div>
        <br />
      </div>
  <!-- Mensajes del sitio -->
      <div 
      class="d-none text-center border-left overflow-auto"
      style="min-width: 200px;
            max-width: 25%;
            max-height: 400px">
        <br><br>
        <div 
        class="mt-2">
          <h4 class="bg-warning border m-0">Comentarios</h4>
          <b-alert show variant="success" class="p-1 mx-1 mb-1">
            <h5 class="m-0">Nombre</h5>
            <small class="" style="font-size: .7em">Correo</small>
            <p class="my-2" style="font-size:.85em">Mensaje del usuario Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore accusamus debitis similique.</p>
            <hr class="m-0">
            <div class="d-flex justify-content-between px-2">
              <p class="m-0"><small>12/03/2021</small></p>
              <p class="m-0"><small>--:-- hrs</small></p>
            </div>
          </b-alert>
          <b-alert show variant="success" class="p-1 mx-1 mb-1">
            <h5 class="m-0">Nombre</h5>
            <small class="" style="font-size: .7em">Correo</small>
            <p class="my-2" style="font-size:.85em">Mensaje del usuario Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore accusamus debitis similique.</p>
            <hr class="m-0">
            <div class="d-flex justify-content-between px-2">
              <p class="m-0"><small>12/03/2021</small></p>
              <p class="m-0"><small>--:-- hrs</small></p>
            </div>
          </b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carga from "@/components/Carga";
import Data from "../servicios/ramapi";
export default {
  name: "Personajes",
  components: {
    Carga,
  },
  data() {
    return {
      urlPersonajes: "",
      urlUbicaciones: "",
      urlEpisodios: "",
      personajes: [],
      ubicaciones: [],
      capitulos: [],
      error: "",
    };
  },
  methods: {
    async getApis() {
      this.$store.state.carga = true;
      setTimeout(() => {
        let data = new Data();
        data
          .getData()
          .then((resp) => resp.json())
          .then((response) => {
            this.urlPersonajes = response.characters;
            this.urlUbicaciones = response.locations;
            this.urlEpisodios = response.episodes;
          })
          .then(() => {
            return fetch(this.urlPersonajes);
          })
          .then((data) => data.json())
          .then((info) => {
            this.personajes = info.results;
            this.$store.state.carga = false;
          })
          .then(() => {
            for (let i = 0; i < this.personajes.length; i++) {
              this.capitulos.push({personaje: this.personajes[i].name, episodios:[]});
              // console.log(this.personajes[i].name)
              // if(this.capitulos.personaje == this.personajes[i].name){
              //   for (let index = 0; index < this.personajes[index].episode.length; index++) {
              //     console.log(this.personajes[index].episode) 
              //     console.log('hola ' + i + ' ' + index )
              //     this.capitulos[i].episodios.push({id: '', episodio: ''})
              //   }
              // }
              this.personajes[i].episode.forEach(element => {
                let uid = element.split('/').pop();
                this.capitulos[i].episodios.push({id: uid, episodio: element});
                // this.capitulos[i].episodios.id.push(element.split('/').pop())
                // console.log(this.capitulos)
              });
              // console.log('uid '+ uid)
              // console.log(this.capitulos[i].episodios)
            }
            // console.log(this.personajes)
            console.log(this.capitulos)
            console.log(this.personajes[0].episode.length)
          })
          .catch((error) => {
            console.log(error);
            return (this.error = error);
          });
      }, 2000);
    },

    resizeWindow() {
      this.$store.state.window.width = window.innerWidth;
      this.$store.state.window.height = window.innerHeight;
      // console.log("Ancho: " + this.$store.state.window.width);
      // console.log("Largo: " + this.$store.state.window.height);
    },
  },
  mounted() {
    this.getApis();
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
  },
};
</script>

<style lang="sass" scoped>
#botonGroup
  max-height: 500px
  overflow: hidden

.largo-max
  max-height: 99.8vh

.largo-80
  max-height: 80vh  

.mw-50
  max-width: 50%
</style>
