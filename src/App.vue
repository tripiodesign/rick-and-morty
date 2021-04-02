<template>
  <div id="app">
    <Menu :class="{'d-none': this.$store.state.carga == true}" />
    <vue-page-transition name="fade">
      <router-view class="m-0" :style="{height: this.$store.state.window.height+'px'}"/>
    </vue-page-transition>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      width: '',
      height: '',
    }
  },
  methods: {
    resizeWindow() {
      this.$store.state.window.width = window.innerWidth;
      this.$store.state.window.height = window.innerHeight;
      this.width = this.$store.state.window.width + 'px';
      this.height = this.$store.state.window.height + 'px';
      // console.log("Width: " + this.$store.state.window.width);
      // console.log("Height: " + this.$store.state.window.height);
      // console.log("Width: " + this.width);
      // console.log("Height: " + this.height);
    },
  },
  beforeMount() {
    },
  mounted() {
    window.addEventListener("resize", this.resizeWindow);
    this.resizeWindow();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
  },
};
</script>

<style lang="sass" scoped>
</style>
