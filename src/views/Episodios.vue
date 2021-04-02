<template>
    <b-row id="episodios">
      <b-col cols="3" class="border-right bg-dark">

      </b-col>
      <b-col>
        <h3>
          <b-badge variant="success" class="d-block py-2 rounded-0">
              Episodios
          </b-badge>
        </h3>
        <!-- Botones de paginacion -->
        <!-- <PageBtnEpi /> -->
        <CardsEpi />
        <!-- Botones de paginacion -->
        <PageBtnEpi />
      </b-col>
      <b-col cols="12" class="bg-dark">
        
      </b-col>
    </b-row>
</template>

<script>
// import Data from "../servicios/ramapi";
import CardsEpi from "@/components/CardsEpi";
import PageBtnEpi from "@/components/PageBtnEpi";

export default {
  components:{
    CardsEpi,
    PageBtnEpi,
  },
  data() {
    return {
      pagina: this.$store.state.epiApi.page,
      paginas: this.$store.state.epiApi.pages,
    }
  },
  methods: {
    // getSize(){
    //   console.log(this.$store.state.window.width);
    //   console.log(this.$store.state.window.height);
    // }

  },
  mounted() {
    // Dimensiones del dispositivo //
    // console.log(this.$store.state.window.width);
    // console.log(this.$store.state.window.height);
  },
};
</script>

<style></style>
