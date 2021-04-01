<template>
    <div id="cardsEpi">
        <h3>
            <b-badge variant="success" class="d-block py-2 rounded-0">
                Episodios
            </b-badge>
        </h3>
        <!-- Tarjetas de personajes -->
        <b-container id="cards" class="overflow-auto h-75">
            <b-card class="rounded-0" v-for="(episodio, i) in $store.state.epiApi.episodios" :key="episodio.id">
                <b-card-header class="d-flex justify-content-between align-items-center">
                    <p class="m-0">{{episodio.name}}</p><b-badge variant="warning" class="p-2">{{episodio.air_date}}</b-badge>
                </b-card-header>
                <b-card-body>
                    <div class="bg-dark rounded">
                        <b-button block variant="outline-success" v-b-toggle="'residentes'+i">Habitantes</b-button>
                        <b-collapse :id="'residentes'+i">
                            <b-list-group>
                                <b-list-group-item v-for="(residente, indice) in $store.state.epiApi.episodios[i].characters" :key="indice">
                                    <p>{{residente}}</p>
                                </b-list-group-item>
                            </b-list-group>
                        </b-collapse>
                    </div>
                </b-card-body>
            </b-card>
        </b-container>
        <hr>
        <!-- Botones de paginacion -->
        <b-container class="fixed-bottom d-flex justify-content-between align-items-center w-75 mx-auto">
            <b-button class="" variant="outline-success" @click="epiPrev">
                Anterior
            </b-button>
            <p>{{this.$store.state.epiApi.page}} / {{this.$store.state.epiApi.pages}}</p>
            <b-button class="" variant="outline-success" @click="epiNext">
                Siguiente
            </b-button>
        </b-container>

    </div> 
</template>

<script>
import Data from "../servicios/ramapi";
let data = new Data();

export default {
    name: 'CardsEpi',
    data() {
        return {

        }
    },
    methods: {
        getApi(data){
        data.getData()
            .then(res => res.json())
            .then(res => this.$store.state.epiApi.api = res.episodes)
            .then(() => {
                // console.log(this.$store.state.epiApi.api)
                fetch(this.$store.state.epiApi.api)
                .then(res => res.json())
                .then(res =>{
                    // console.log(res);
                    this.$store.state.epiApi.infoApi = res;
                    this.$store.state.epiApi.pages = res.info.pages;
                    this.$store.state.epiApi.apiNext = res.info.next;
                    this.$store.state.epiApi.apiPrev = res.info.prev;
                    this.$store.state.epiApi.episodios = res.results;
                })
                })
        },
        epiNext(){
        if(this.$store.state.epiApi.apiNext != null){
            this.$store.state.epiApi.api = this.$store.state.epiApi.infoApi.info.next;
            this.$store.state.epiApi.page = this.$store.state.epiApi.page+1;
            // console.log(this.$store.state.epiApi.api)
            fetch(this.$store.state.epiApi.api)
            .then(res => res.json())
            .then(res => {
            // console.log(res);
            this.$store.state.epiApi.infoApi = res;
            this.$store.state.epiApi.apiNext = res.info.next;
            this.$store.state.epiApi.apiPrev = res.info.prev;
            this.$store.state.epiApi.episodios = res.results;
            })
        }
        },
        epiPrev(){
        if(this.$store.state.epiApi.apiPrev != null){
            this.$store.state.epiApi.api = this.$store.state.epiApi.infoApi.info.prev;
            this.$store.state.epiApi.page = this.$store.state.epiApi.page-1;
            // console.log(this.$store.state.epiApi.api)
            fetch(this.$store.state.epiApi.api)
            .then(res => res.json())
            .then(res => {
            // console.log(res);
            this.$store.state.epiApi.infoApi = res;
            this.$store.state.epiApi.apiNext = res.info.next;
            this.$store.state.epiApi.apiPrev = res.info.prev;
            this.$store.state.epiApi.episodios = res.results;
            })
        }
        },
    },
    mounted() {
        this.getApi(data);
        // console.log('Distancia: '+document.getElementById('cards').getBoundingClientRect().top);
    },
}
</script>

<style>

</style>