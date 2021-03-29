<template>
  <div id="404" class="d-flex justify-content-center align-items-center position-fixed" style="width: 100vw; height: 100vh; max-height: 100%">
    <b-container class="m-auto">
      <br>

      <div>
        <b-card
          overlay
          :img-src="require('../assets/img/empty404.svg')"
          img-alt="404"
          text-variant="dark"
          bg-variant="transparent"
          title="Página no encontrada"
          sub-title="Error en la busqueda"
          class="border-0 m-auto text-right "
          style="max-width: 40rem;"
        >
          <br>
          <b-card-text class="mt-2 w-100 h-75 d-flex justify-content-end align-items-end">
            <p class="w-50  text-left">
              La página no existe o no esta disponible
            </p>
          </b-card-text>
        </b-card>
      </div>
      <b-button 
      id="btnVolver" 
      variant="outline-warning" 
      class="btn-dark border border-dark rounded-pill d-block mx-auto mt-2" 
      style="max-width: 50%"
      to="/">
        Volver al inicio
        <b-icon icon="arrow-return-left" class="border border-success rounded-circle p-1 ml-3" style="transform: scale(1.3)"></b-icon>
      </b-button>
    </b-container>
  </div>
</template>

<script>
import "../assets/img/not-found.svg"
export default {
  name: 'notFound',
  data() {
    return {
    }
  },
};
</script>

<style scoped>
</style>
