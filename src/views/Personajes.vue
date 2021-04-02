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
    <b-row v-else class="p-0 m-0">
      <b-col cols="2" class="d-none d-md-block p-0">
        <!-- lista de navegacion de pjs -->
        <ListaPj class=""/>
      </b-col>
      <b-col class="overflow-auto p-0" style="max-height: 91.6vh;">
        <h2 class="m-0">
          <b-badge variant="danger" class="d-block py-1 m-0 rounded-0" style="font-weight: lighter">
            Personajes
          </b-badge>
        </h2>
        <CardsPj class="" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Carga from "@/components/Carga";
import ListaPj from "@/components/ListaPj";
import CardsPj from "@/components/CardsPj";

export default {
  name: "Personajes",
  components: {
    Carga,
    ListaPj,
    CardsPj,
  },
  data() {
    return {
      width: this.$store.state.window.width,
      height: this.$store.state.window.height,
      error: "",
    };
  },
  methods: {
    resizeWindow() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      // console.log("Ancho: " + this.width);
      // console.log("Largo: " + this.height);
    },
    // Tiempo de pantalla de carga
    async load() {
      this.$store.state.carga = true;
      setTimeout(() => {
        this.$store.state.carga = false;
      }, 2000);
    },
  },
  mounted() {
    this.load();
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
    // Calcular distandcia margen - elemento //
    // console.log('Distancia: '+document.getElementById('personajes').getBoundingClientRect().top);
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
