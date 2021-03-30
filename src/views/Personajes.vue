<template>
  <div
    id="personajes"
    style="background-color: #e9ecef"
    class="w-100"
    :class="{ 'position-fixed': this.$store.state.window.width > 767 }"
  >
<!-- Componente de carga  -->
    <div
      v-if="$store.state.carga == true"
      style="transition: all 1000ms linear"
      transition="fade"
    >
      <Carga />
    </div>
<!-- Contenido de la vista -->
    <div v-else class="d-md-flex justify-content-between">
<!-- lista de navegacion de pjs -->
      <div
        class="d-none d-md-block m-0 border-right w-100"
        style="min-width: 200px; max-width: 20%"
        role="tablist"
      >
        <br /><br />
        <div class="accordion">
          <b-card class="bg-transparent border-0">
            <b-button
              v-b-toggle.seccion1
              block
              square
              variant="outline-danger"
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
<!-- Contenedor de tarjetas de pjs -->
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
<!-- Tarjetas de persnajes -->
        <b-card
          v-for="(personaje, index) in personajes"
          :key="personaje.id"
          :id="'personaje' + index"
          bg-variant="transparent"
          style="max-width: 650px"
          class="d-none my-3 p-0 mx-0 mx-auto rounded-0 border-top-0 border-left-0 border-right-0 border-bottom"
        >
          <br /><br />
          <img
            :src="personaje.image"
            style="width: 256px; max-width: 90%"
            class="d-block mx-auto rounded border-dotted rounded-circle"
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
<!-- Contenedor episodios -->
          <b-card
            no-body
            class="border border-top-0 border-danger mx-auto d-block"
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
                class="text-left border-left-0 border-right-0 d-flex justify-content-between align-items-center m-0"
                >Episodios <b-icon icon="collection-play"></b-icon>
              </b-button>
            </b-card-header>
            <b-collapse :id="'box' + index" class="border-0">
              <b-card-body
                class="overflow-auto border-bottom border-dark rounded-bottom"
                style="max-height: 800px"
              >
                <b-list-group class="my-2">
                  <b-list-group-item
                    v-for="capitulo in capitulos[index].episodios"
                    :key="capitulo.episodio.id"
                    class="border-top-0 border-right-0 border-left-0 rounded-0 p-0 pl-1"
                    id=""
                  >
                    <div>
                      <b-badge
                        variant="dark"
                        class="d-block text-warning ml-auto my-0 p-2"
                        style="
                          width: 150px;
                          max-width: 50%;
                          font-size: 1em;
                          font-weight: lighter;
                        "
                        >Capitulo Nº{{ capitulo.id }}</b-badge
                      >
                      <b-alert show class="rounded-0 my-1" variant="dark">
                        <p>Revisa el capitulo</p>
                        <b-button
                          :to="{
                            name: 'Episodio',
                            pagina: 1,
                            params: {
                              api: capitulo.episodio,
                            },
                          }"
                          variant="outline-danger"
                          pill
                          style=""
                          class="d-flex justify-content-between align-items-center"
                          >GO <b-icon icon="play-circle"></b-icon>
                        </b-button>
                      </b-alert>
                    </div>
                  </b-list-group-item>
                </b-list-group>
                <!-- Boton flotante cerrar contenedor episodios -->
                <b-button
                  v-b-toggle="'box' + index"
                  variant="warning"
                  class="fixed-bottom ml-auto mr-4 mb-4 mx-md-auto rounded-circle border border-primary"
                  style="width: 60px; height: 60px"
                >
                  <a
                    class="d-flex justify-content-center align-items-center"
                    style="transform: scale(1.8)"
                    ><b-icon
                      icon="arrows-angle-contract"
                      class="position-fixed"
                    ></b-icon>
                    <small class="text-dark" style="font-size: 0.1em">{{
                      personaje.id
                    }}</small></a
                  >
                </b-button>
              </b-card-body>
            </b-collapse>
          </b-card>

        </b-card>

        <br><br>
<!-- tarjetas de personajes en paginador -->
        <div class="w-100">
          <div class="">
            <b-card v-for="(personaje, i) in elementos" :key="personaje.id" 
            bg-variant="transparent"
            class="border-0">
              <div class="border border-success rounded">
                <br>
                <img :src="personaje.image" alt="" class="d-block mx-auto rounded-circle">
                <br>
                <p class="px-3 py-2 m-0 w-100 bg-dark rounded-bottom text-warning text-right">{{personaje.name}}</p>
              </div>
              <br>
              <div class="d-flex justify-content-around aling-items-center">
                <b-badge variant="warning" class="px-3 py-2 rounded-pill">Tipo: {{personaje.species}}</b-badge>
                <b-badge variant="warning" class="px-3 py-2 rounded-pill">Sexo: {{personaje.gender}}</b-badge>
                <b-badge variant="warning" class="px-3 py-2 rounded-pill">Estado: {{personaje.status}}</b-badge>
              </div>
              <br>
              <div class="p-0 m-0 border border-success rounded">
                <b-button v-b-toggle="'box' + i" 
                variant="outline-success" 
                class="m-0 border-left-0 border-right-0 border-top-0 w-100 d-flex justify-content-between align-items-center"
                >Episodios <b-icon icon="collection-play"></b-icon>
                </b-button>
                <b-collapse :id="'box' + i" class="border-0">
                  <b-card-body
                    class="overflow-auto border-bottom border-dark rounded-bottom mt-1"
                    style="max-height: 800px"
                  >
                    <div v-for="capitulo in capitulos[i].episodios" :key="capitulo.episodio.id"
                    class="mb-4">
                      <b-alert show 
                      class="rounded my-1" variant="light">
                        <b-badge
                          variant="dark"
                          class="d-block text-warning ml-auto my-0 p-2"
                          style="
                            width: 150px;
                            max-width: 50%;
                            font-size: 1em;
                            font-weight: lighter;
                          "
                        >Capitulo Nº{{capitulo.id}}</b-badge>
                        <p>Revisa el capitulo</p>
                        <b-button
                          :to="{
                            name: 'Episodio',
                            page: 1,
                            params: {
                              api: capitulo.episodio
                            },
                          }"
                          variant="outline-danger"
                          pill
                          style=""
                          class="d-flex justify-content-between align-items-center"
                          >GO <b-icon icon="play-circle"></b-icon>
                        </b-button>
                      </b-alert>
                    </div>
                  </b-card-body>
                </b-collapse>
              </div>
            </b-card>
          </div>
          <div class="w-100 d-flex justify-content-center align-items-center pb-0 pt-3">
            <jw-pagination class="mx-auto" 
            :pageSize=5 
            :items="personajes" 
            :disableDefaultStyles="true"
            :labels="customLabels"
            @changePage="cambiarPagina"></jw-pagination>
          </div>
        </div>

<!-- Navegacion entre paginas -->
        <!-- <div>
          <b-container class="pagination d-flex justify-content-between align-items-center text-center text-muted mx-auto w-75" role="navegation" aria-label="pagination">
            <b-link class="pagination-prev text-muted p-2 d-block" @click="changePage( pagina - 1 )">Anterior</b-link>
            
            <p class="m-auto bg-success text-light rounded-circle d-flex justify-content-center align-items-center" 
               style="width: 25px; height: 25px; font-size: .8em">{{this.pagina}}</p>

            <b-link class="pagination-next text-muted p-2 d-block" 
            :to="{
                  name: 'Personajes', 
                  page: pagina+1,
                  params: {
                    api: nextUrl,
                  }
                 }">Siguiente</b-link>
          </b-container>
          <hr class="mb-0">
        </div> -->
      </div>

<!-- Revisa más... -->
      <div
        class="mt-4 mx-auto py-0 px-2"
        :class="{ 'borde-izq': this.$store.state.window.width > 767 }"
        style="
          min-width: 300px;
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
          :startDelay="1000"
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
        <div
          class="flex-column justify-content-center p-0 m-0"
          style="font-size: 0.8em"
        >
          <b-alert show variant="transparent" class="border border-danger">
            <h5>Home</h5>
            <p>Información del sitio y sus secciones</p>
            <b-link
              class="text-center text-danger border border-danger m-0 p-1 d-block"
              :to="{ name: 'Home' }"
              ><i>ver más...</i></b-link
            >
          </b-alert>
          <b-alert show variant="transparent" class="border border-danger">
            <h5>Episodios</h5>
            <p>Encuentra información de los episodios</p>
            <b-link
              class="text-center text-danger border border-danger m-0 p-1 d-block"
              :to="{ name: 'Episodios' }"
              ><i>ver más...</i></b-link
            >
          </b-alert>
          <b-alert show variant="transparent" class="border border-danger">
            <h5>Ubicaciones</h5>
            <p>Las ubicaciones y origenes de los personajes</p>
            <b-link
              class="text-center text-danger border border-danger m-0 p-1 d-block"
              :to="{ name: 'Ubicaciones' }"
              ><i>ver más...</i></b-link
            >
          </b-alert>
        </div>
        <br />
      </div>
<!-- Mensajes del sitio -->
      <div
        class="d-none text-center border-left overflow-auto"
        style="min-width: 200px; max-width: 25%; max-height: 400px"
      >
        <br /><br />
        <div class="mt-2">
          <h4 class="bg-warning border m-0">Comentarios</h4>
          <b-alert show variant="success" class="p-1 mx-1 mb-1">
            <h5 class="m-0">Nombre</h5>
            <small class="" style="font-size: 0.7em">Correo</small>
            <p class="my-2" style="font-size: 0.85em">
              Mensaje del usuario Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore accusamus debitis similique.
            </p>
            <hr class="m-0" />
            <div class="d-flex justify-content-between px-2">
              <p class="m-0"><small>12/03/2021</small></p>
              <p class="m-0"><small>--:-- hrs</small></p>
            </div>
          </b-alert>
          <b-alert show variant="success" class="p-1 mx-1 mb-1">
            <h5 class="m-0">Nombre</h5>
            <small class="" style="font-size: 0.7em">Correo</small>
            <p class="my-2" style="font-size: 0.85em">
              Mensaje del usuario Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore accusamus debitis similique.
            </p>
            <hr class="m-0" />
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

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

export default {
  name: "Personajes",
  components: {
    Carga,
  },
  data() {
    return {
      customLabels,
      elementos: [],
      infoApi: '',
      urlPersonajes: '',
      nextUrl: '',
      prevUrl: '',
      personajes: [],
      capitulos: [],
      error: "",
      pagina: 1,
      paginas: 1,
    };
  },
  methods: {
    cambiarPagina(elements) {
      // update page of items
      this.elementos = elements;
    },
    resizeWindow() {
      this.$store.state.window.width = window.innerWidth;
      this.$store.state.window.height = window.innerHeight;
      // console.log("Ancho: " + this.$store.state.window.width);
      // console.log("Largo: " + this.$store.state.window.height);
    },
// Tiempo de pantalla de carga
    async load() {
      this.$store.state.carga = true;
      setTimeout(() => {
        this.$store.state.carga = false;
      }, 2000);
    },
// Fetch desde params
    fetchPjs(){
      // this.urlPersonajes = this.$route.params.api;
      // console.log(this.urlPersonajes);
      fetch(this.urlPersonajes)
      .then(data => data.json())
      .then(response => {
        // console.log(response)
        this.personajes = response.results;
        console.log(this.personajes);
        this.paginas = response.info;
        // console.log(this.paginas);
      })
      .then(() => {
        for (let i = 0; i < this.personajes.length; i++) {
          this.capitulos.push({
            personaje: this.personajes[i].name,
            episodios: [],
          });
          this.personajes[i].episode.forEach((element) => {
            let uid = element.split("/").pop();
            this.capitulos[i].episodios.push({
              id: uid,
              episodio: element,
            });
          });
        }
      })
      .catch((error) => {
        console.log(error);
        return (this.error = error);
      });
    },
// Fetch desde archivo servicios
    getApi(){
      const data = new Data();
      // this.urlPersonajes = data.ramPj;
      // console.log(this.urlPersonajes)
      data.getPj()
          .then(res => res.json())
          .then(response => {
        // console.log(response)
        this.personajes = response.results;
        // console.log(this.personajes);
        this.paginas = response.info.pages;
        // console.log(this.paginas);
        this.infoApi = response.info;
        // console.log(this.infoApi);
        this.nextUrl = response.info.next;
        console.log(this.nextUrl);
        this.prevUrl = response.info.prev;
        console.log(this.prev);
      })
          .then(() => {
            for (let i = 0; i < this.personajes.length; i++) {
              this.capitulos.push({
                personaje: this.personajes[i].name,
                episodios: [],
              });
              this.personajes[i].episode.forEach((element) => {
                let uid = element.split("/").pop();
                this.capitulos[i].episodios.push({
                  id: uid,
                  episodio: element,
                });
              });
            }
          })
          .catch((error) => {
            console.log(error);
            return (this.error = error);
          });
    },
// Condicional para fetch
    apiOn(){
      if(this.$route.params.api){
        this.fetchPjs();
        console.log('se ejecuto con params')
      }else{
        this.getApi();
        console.log('se ejecuto con archivo servicio')
      }
    },
// Cambiar de pagina
    // changePage(page){
    //   this.pagina = ( page <= 0 || page >= this.paginas ) ? this.page : page;
    //   this.urlPersonajes = this.urlPersonajes + '?page=' + this.pagina;
    //   console.log('new url ' +this.urlPersonajes);
    // },
    // actChange(page){
    //   this.changePage(page).then(()=>{this.apiOn()});
    // }
  },
  mounted() {
    this.urlPersonajes = this.urlPersonajes ? this.$route.params.api : new Data().ramPj ;
    this.apiOn();
    this.load();
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
    // console.log(this.pagina);
    // console.log(this.$route.params.api);
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

.borde-izq
  border-left: 1px solid #dfdfdf
</style>
