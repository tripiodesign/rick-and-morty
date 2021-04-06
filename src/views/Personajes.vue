<template>
  <div
    id="personajes"
    class="position-fixed p-0"
  > 
    <!-- Componente de carga  -->
    <div v-if="$store.state.carga == true"
      style="transition: all ease 1s linear"
      transition="fade"
    >
      <Carga />
    </div>
    <!-- Contenido de la vista -->
    <div v-else>
      <b-row v-if="this.$store.state.change == false" class="p-0 m-0">
        <b-col id="conLista" cols="3" 
        :style="{'width': this.clistaSize.width ,'height': (this.$store.state.window.height-57)+'px'}"
        class="d-none d-md-block p-0 m-0">
          <!-- lista de navegacion de pjs -->
          <ListaPj class=""/>
        </b-col>
        <!-- columna de contenido de la vista -->
        <b-col id="contenido" class="overflow-auto p-0 m-0 w-100"
        :style="{'height': (this.$store.state.window.height-57)+'px'}"
        >
            <h2 class="m-0">
              <b-badge variant="danger" class="d-block py-1 m-0 rounded-0" style="font-weight: lighter">
                Personajes
              </b-badge>
            </h2>
            <!-- componente tarjetas de personaje -->
            <CardsPj />
            <!-- Carga de paginacion -->
        </b-col>
        
      </b-row>
      <b-row v-else class="m-0 p-0">
        <b-col cols="12" class="bg- d-flex" style="width: 100vw; height: 100vh">
          <ChLoad class=" m-auto bg-dark rounded-circle"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Carga from "@/components/Carga";
import ListaPj from "@/components/ListaPj";
import CardsPj from "@/components/CardsPj";
import ChLoad from "@/components/ChLoad";

import Data from "../servicios/ramapi";
let data = new Data();

export default {
  name: "Personajes",
  components: {
    Carga,
    ListaPj,
    CardsPj,
    ChLoad,
  },
  data() {
    return {
      width: this.$store.state.window.width,
      height: this.$store.state.window.height,
      error: "",
      change: false,
      contenido:{
        width: Number,
        height: Number,
      },
      clistaSize: {
        width: Number,
        height: Number,
      },
    };
  },
  methods: {
    load(){
            this.$store.state.carga = true;
            setTimeout(()=>{
                this.$store.state.carga = false
            },2000)
        },
        getApi(data){
          data.getData()
          .then(res => res.json())
          .then(res => {
              // console.log(res);
              this.$store.state.pjsApi.api = res.characters
          })
          .then(() => {
              // console.log(this.$store.state.pjsApi.api);
              fetch(this.$store.state.pjsApi.api)
              .then(res => res.json())
              .then(res =>{
                  // console.log(res);
                  this.$store.state.pjsApi.infoApi = res;
                  this.$store.state.pjsApi.pages = res.info.pages;
                  this.$store.state.pjsApi.apiNext = res.info.next;
                  this.$store.state.pjsApi.apiPrev = res.info.prev;
                  this.$store.state.pjsApi.personajes = res.results;
              })
          })
          .then(()=>{
              console.log(this.$store.state.pjsApi.personajes);
          })
        },
    elementSize() {
      this.clistaSize.width = document.getElementById("conLista").clientWidth;
      this.clistaSize.height = document.getElementById("conLista").clientHeight;
      console.log('Width: '+this.clistaSize.width)
      console.log('Height: '+this.clistaSize.height)
      // console.log("Ancho: " + this.width);
      // console.log("Largo: " + this.height);
    },
    // handleOrientation(event) {
    //   var absolute = event.absolute;
    //   var alpha    = event.alpha;
    //   var beta     = event.beta;
    //   var gamma    = event.gamma;
    //   console.log('A > '+alpha+', B > '+beta+', G > '+gamma+', Abs > '+absolute);
    //   // Do stuff with the new orientation data
    // },
  },
  mounted() {
    this.getApi(data);
    this.load();
    window.addEventListener("resize", this.elementSize);
    this.elementSize();
    // window.addEventListener("deviceorientation", this.handleOrientation, true);

    // Calcular distandcia margen - elemento //
    // console.log('Distancia: '+document.getElementById('personajes').getBoundingClientRect().top);
  },
  destroyed() {
    window.removeEventListener("resize", this.elementSize);
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
