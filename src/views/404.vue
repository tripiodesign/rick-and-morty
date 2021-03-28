<template>
  <div id="404" class="d-flex justify-content-center align-items-center position-fixed bg-warning" style="width: 100vw; height: 100vh;">
    <b-container class="" style="max-width: 800px">
      <b-jumbotron 
      bg-variant="transparent" 
      header="Pagina no encontrada" 
      header-level="4" 
      lead="La pagina que estas intentado visitar no existe o no se encuentra disponible">
        <h5 class="text-right">
          <b-alert show 
          bg-variant="dark" 
          class="bg-success border-0 py-2 px-3 w-75"
          style="max-width: 400px; font-size: .8em"
          >Visita alguna de nuestras secciones disponibles</b-alert>
        </h5>
        <br>
        <b-button 
        id="btnVolver" 
        variant="outline-warning" 
        class="btn-dark border border-dark rounded-pill d-block mx-auto" 
        style="max-width: 50%"
        to="/">
          Volver al inicio
          <b-icon icon="arrow-return-left" class="border border-success rounded-circle p-1 ml-3" style="transform: scale(1.3)"></b-icon>
        </b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
