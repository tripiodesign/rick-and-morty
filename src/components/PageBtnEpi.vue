<template>
    <div id="pagBtnEpi">
        <b-container fluid class="d-flex justify-content-between align-items-center mx-auto my-1">
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="chPage(1)">
            {{this.$store.state.btnIco.start}} </b-button>
            
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="chPage(pagina - 1)">
            {{this.$store.state.btnIco.prev}} </b-button>
            
            <b-button variant="transparent" class="text-info" style="font-size: .7em;">{{this.pagina}} <strong>|</strong> {{this.paginas}}</b-button>
            
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="chPage(pagina + 1)">
            {{this.$store.state.btnIco.next}} </b-button>
            
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="chPage(this.paginas)">
            {{this.$store.state.btnIco.end}} </b-button>
        </b-container>
    </div>  
</template>

<script>
export default {
    name: 'PageBtnEpi',
    data() {
        return {
            pagina: this.$store.state.epiApi.page,
            paginas: this.$store.state.epiApi.pages,
        }
    },
    methods: {
        chPage(page){
        // console.log(this.$store.state.epiApi.api)
            fetch(this.$store.state.epiApi.api+'/?page=', {page})
            .then(res => res.json())
            .then(res => {
            // console.log(res);
            this.$store.state.epiApi.page = page;
            this.$store.state.epiApi.infoApi = res;
            this.$store.state.epiApi.apiNext = res.info.next;
            this.$store.state.epiApi.apiPrev = res.info.prev;
            this.$store.state.epiApi.episodios = res.results;
            })
        },
    },
}
</script>

<style>

</style>