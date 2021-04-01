<template>
    <div id="cardsPj" class="w-100 overflow-auto d-md-flex">
        <!-- Lista de personajes -->
        <div
            class="d-none d-md-block border-right w-100"
            style="min-width: 200px; max-width: 20%"
            role="tablist"
        >
            <div class="accordion">
                <b-card class="bg-transparent border-0">
                    <b-button
                    v-b-toggle.seccion1
                    block
                    square
                    variant="dark"
                    class="text-light border-0 mt-0 rounded-top"
                    >Personajes</b-button
                    >
                    <b-collapse
                    id="seccion1"
                    class="overflow-auto"
                    style="max-height: 250px;"
                    >
                        <b-list-group class="flex-column p-0">
                            <b-list-group-item
                            v-for="(pj, i) in $store.state.pjsApi.personajes"
                            :key="pj.id"
                            class="bg-info d-flex p-0 border-0"
                            >
                                <a
                                    :href="'#pj'+i"
                                    class="m-0 bg-dark text-light pl-1 pr-3 py-1"
                                    style="border-radius: 0 45px 45px 0; font-size: .8em;"
                                >
                                    {{ pj.name }}
                                </a>
                            </b-list-group-item>
                        </b-list-group>
                    </b-collapse>
                </b-card>
            </div>
        </div>
        <!-- Contenedor de personajes -->
        <div class="overflow-auto w-100" :style="{'max-height': (this.$store.state.window.height-94)+'px'}">
            <b-container id="cards" class="ml-0 mr-auto" style="max-width:600px;">
                <!-- Botones de paginacion -->
                <b-container fluid class="d-flex justify-content-between align-items-center mx-auto my-1">
                    <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiPrev">
                    {{this.botones.prev}} </b-button>
                    <b-button variant="transparent" class="text-info" style="font-size: .7em;">{{this.$store.state.pjsApi.page}} <strong>|</strong> {{this.$store.state.pjsApi.pages}}</b-button>
                    <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiNext">
                    {{this.botones.next}} </b-button>
                </b-container>
                <!-- Tarjetas de personajes -->
                <b-card :id="'pj'+i" class="rounded-0 my-2 p-0 border border-dark" v-for="(personaje, i) in $store.state.pjsApi.personajes" :key="personaje.id">
                    <div>
                        <img :src="personaje.image" alt="" class="mx-auto my-2 d-block w-75 rounded-circle">
                        <!-- Encabezado de tarjeta -->
                        <b-card-header class="p-0 border-0">
                            <div class="bg-dark text-light p-1 d-flex justify-content-between align-items-center">
                                <p class="p-2 m-0 mx-1 rounded bg-danger" style="font-size: .8em">{{personaje.id}}</p>
                                <p class="p-2 m-0">{{personaje.name}}</p>
                            </div>
                            <div class="w-75 d-flex justify-content-around align-items-center py-2 mx-auto">
                                <b-badge variant="transparent" class="mx-1 p-2 border border-info">Tipo: {{personaje.species}}</b-badge>
                                <b-badge variant="transparent" class="mx-1 p-2 border border-info">Genero: {{personaje.gender}}</b-badge>
                                <b-badge variant="transparent" class="mx-1 p-2 border border-info">Estado: {{personaje.status}}</b-badge>
                            </div>
                            <div class="w-100 p-2">
                                <p class="m-0"><b-badge variant="info">Origen:</b-badge> {{personaje.origin.name}} <i class="fas fa-map-marker text-danger"></i></p>
                                <p class="m-0"><b-badge variant="info">Ubicación:</b-badge> {{personaje.location.name}} <i class="fas fa-thumbtack text-danger"></i></p>
                            </div>
                        </b-card-header>
                    </div>
                    <!-- contenedor episodios -->
                    <b-card-body class="m-0 p-0">
                        <b-button block v-b-toggle="'box'+i" variant="danger" class="rounded-0 border-dark d-flex justify-content-between align-items-center">
                            <p class="m-0">Episodios del personaje</p>
                            <b-icon icon="collection-play-fill"></b-icon>
                        </b-button>
                        <b-collapse :id="'box'+i" class="pt-2 overflow-auto rounded-bottom border border-top-0" style="max-height: 200px;">
                            <b-button block v-for="episodio in $store.state.pjsApi.personajes[i].episode" :key="episodio.id"
                            variant="outline-dark" pill class="d-flex w-75 mx-auto justify-content-between align-items-center text-danger">
                                <b-badge variant="transparent" class="">• Capitulo: {{episodio.split('/').pop()}} </b-badge>
                                <b-icon icon="play-circle" class=""></b-icon>
                            </b-button>
                        </b-collapse>
                    </b-card-body>
                </b-card>
                <!-- Botones de paginacion -->
                <b-container fluid class="d-flex justify-content-between align-items-center mx-auto my-1">
                    <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiPrev">
                    {{this.botones.prev}} </b-button>
                    <b-button variant="transparent" class="text-info" style="font-size: .7em;">{{this.$store.state.pjsApi.page}} <strong>|</strong> {{this.$store.state.pjsApi.pages}}</b-button>
                    <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiNext">
                    {{this.botones.next}} </b-button>
                </b-container>
            </b-container>
        </div>
    </div>
</template>

<script>
import Data from "../servicios/ramapi";
let data = new Data();

export default {
    name: 'CardsPj',
    data() {
        return {
            botones: {
                start: '<<',
                prev: '<',
                next: '>',
                end: '>>',
            },
            episodios: ['hola'],
        }
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
                console.log(this.$store.state.pjsApi.api)
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
        epiNext(){
        if(this.$store.state.pjsApi.apiNext != null){
            this.$store.state.pjsApi.api = this.$store.state.pjsApi.infoApi.info.next;
            this.$store.state.pjsApi.page = this.$store.state.pjsApi.page+1;
            // console.log(this.$store.state.pjsApi.api)
            fetch(this.$store.state.pjsApi.api)
            .then(res => res.json())
            .then(res => {
            console.log(res);
            this.$store.state.pjsApi.infoApi = res;
            this.$store.state.pjsApi.apiNext = res.info.next;
            this.$store.state.pjsApi.apiPrev = res.info.prev;
            this.$store.state.pjsApi.personajes = res.results;
            })
        }
        },
        epiPrev(){
        if(this.$store.state.pjsApi.apiPrev != null){
            this.$store.state.pjsApi.api = this.$store.state.pjsApi.infoApi.info.prev;
            this.$store.state.pjsApi.page = this.$store.state.pjsApi.page-1;
            // console.log(this.$store.state.pjsApi.api)
            fetch(this.$store.state.pjsApi.api)
            .then(res => res.json())
            .then(res => {
            console.log(res);
            this.$store.state.pjsApi.infoApi = res;
            this.$store.state.pjsApi.apiNext = res.info.prev;
            this.$store.state.pjsApi.apiPrev = res.info.prev;
            this.$store.state.pjsApi.personajes = res.results;
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