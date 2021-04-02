<template>
  <div id="carga" 
      class="position-fixed bg-dark d-flex justify-content-center align-items-center"
      style="z-index: 12000;"
      :style="{'width': this.$store.state.window.width+'px', 'height': this.$store.state.window.height+'px'}">

      <b-iconstack font-scale="7" animation="spin" class="">
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
          :strings="[
            'Cargando...',
            'Espere...',
            'Ya casi...',
            'Gracias por <br> tu visita.',
          ]"
          :typeSpeed="300"
          :backDelay="1000"
          :backSpeed="80"
          :loop="true"
          :cursorChar="'_'"
        >
          <h5 class="text-warning">
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
      <p>Rick & Morty</p>
      <p style="font-size: 0.8em">
        by
        <strong>
          <em>
            <i class="text-success">Tripio</i>
            <i class="text-warning">Design</i>
          </em>
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carga",
  data() {
    return {
      datos: [],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="sass" scoped></style>
