<template>
  <div id="episodios" class="">
    <CardsEpi/>
  </div>
</template>

<script>
import CardsEpi from "@/components/CardsEpi";

export default {
  components:{
    CardsEpi,
  },
  data() {
    return {

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
