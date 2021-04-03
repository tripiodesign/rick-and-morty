<template>
    <div id="cardsPj" class="">
        <!-- Botones de paginacion -->
        <b-container fluid class="w-50 d-flex justify-content-around align-items-center my-1">
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiPrev">
            {{this.botones.prev}} </b-button>
            <b-button variant="transparent" class="text-info" style="font-size: .7em;"><b>[</b> {{this.$store.state.pjsApi.page}} <b>|</b> {{this.$store.state.pjsApi.pages}} <b>]</b></b-button>
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiNext">
            {{this.botones.next}} </b-button>
        </b-container>
        <!-- Tarjetas de personajes -->
        <b-row class="m-0 p-0">
            <!-- Tarjetas de personajes -->
            <b-col :id="'pj'+personaje.id" v-for="(personaje, i) in $store.state.pjsApi.personajes" :key="personaje.id" style="" class="m-md-2 bg-info p-0">
                <b-card class="mx-auto" style="width: 400px; max-width: 100%">
                    <img :src="personaje.image" alt="" class="mx-auto my-2 d-block w-75 rounded-circle">
                    <!-- Informacion del personaje -->
                    <b-card-header class="p-0 border-0">
                        <!-- nombre del personaje -->
                        <div class="bg-dark text-light p-1 d-flex justify-content-between align-items-center">
                            <p class="p-2 m-0 mx-1 rounded bg-danger" style="font-size: .8em">{{personaje.id}}</p>
                            <p class="p-2 m-0">{{personaje.name}}</p>
                        </div>
                        <!-- insignias de informacion -->
                        <div class="w-75 d-flex justify-content-around align-items-center py-2 mx-auto">
                            <b-badge variant="transparent" class="m-1 px-1 py-2 border border-info">Tipo: {{personaje.species}}</b-badge>
                            <b-badge variant="transparent" class="m-1 px-1 py-2 border border-info">Genero: {{personaje.gender}}</b-badge>
                            <b-badge variant="transparent" class="m-1 px-1 py-2 border border-info">Estado: {{personaje.status}}</b-badge>
                        </div>
                        <!-- origen - ubicacion -->
                        <div class="w-100 pl-4 pb-2">
                            <p class="m-0"><b-badge variant="info">Origen:</b-badge> {{personaje.origin.name}} <i class="fas fa-map-marker text-danger"></i></p>
                            <p class="m-0"><b-badge variant="info">Ubicación:</b-badge> {{personaje.location.name}} <i class="fas fa-thumbtack text-danger"></i></p>
                        </div>
                    </b-card-header>    
                    <!-- contenedor episodios -->
                    <b-card-body class="m-0 p-0">
                        <b-button block v-b-toggle="'box'+i" variant="danger" class="rounded-0 border-dark d-flex justify-content-between align-items-center">
                            <p class="m-0">Episodios del personaje</p>
                            <b-icon icon="collection-play-fill"></b-icon>
                        </b-button>
                        <b-collapse :id="'box'+i" class="pt-2 overflow-auto rounded-bottom border border-top-0" style="max-height: 200px;">
                            <b-button block v-for="episodio in $store.state.pjsApi.personajes[i].episode" :key="episodio.id"
                            variant="outline-dark" pill class="d-flex w-75 mx-auto justify-content-between align-items-center text-danger"
                            :to="{path: ''}">
                                <b-badge variant="transparent" class="">• Capitulo: {{episodio.split('/').pop()}} </b-badge>
                                <b-icon icon="play-circle" class=""></b-icon>
                            </b-button>
                        </b-collapse>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <!-- Botones de paginacion -->
        <b-container fluid class="w-50 d-flex justify-content-around align-items-center my-1">
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiPrev">
            {{this.botones.prev}} </b-button>
            <b-button variant="transparent" class="text-info" style="font-size: .7em;"><b>[</b> {{this.$store.state.pjsApi.page}} <b>|</b> {{this.$store.state.pjsApi.pages}} <b>]</b></b-button>
            <b-button class="border-0 rounded-circle p-2 d-flex justify-content-center align-items-center" style="width: 20px; height: 20px; font-size: .7em;" variant="outline-info" @click="epiNext">
            {{this.botones.next}} </b-button>
        </b-container>
    </div>
</template>

<script>


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
        epiNext(){
            this.$store.state.change = true;
            setTimeout(() => {
                if(this.$store.state.pjsApi.page >= 1 || this.$store.state.pjsApi.page <= this.$store.state.pjsApi.pages){
                    this.$store.state.pjsApi.api = this.$store.state.pjsApi.infoApi.info.next;
                    this.$store.state.pjsApi.page = this.$store.state.pjsApi.page+1;
                    // console.log(this.$store.state.pjsApi.api)
                    fetch(this.$store.state.pjsApi.api)
                    .then(res => res.json())
                    .then(res => {
                        this.$store.state.change = true
                        // console.log(res);
                        this.$store.state.pjsApi.infoApi = res;
                        this.$store.state.pjsApi.apiNext = res.info.next;
                        this.$store.state.pjsApi.apiPrev = res.info.prev;
                        this.$store.state.pjsApi.personajes = res.results;
                    })
                    .then(()=>{
                        this.$store.state.change = false;
                    })
                    .catch(error=>console.success(error))
                }
            }, 1000);
        },
        epiPrev(){
            this.$store.state.change = true;
            setTimeout(() => {
                if(this.$store.state.pjsApi.page >= 1 || this.$store.state.pjsApi.page <= this.$store.state.pjsApi.pages){
                    this.$store.state.change = true;
                    this.$store.state.pjsApi.api = this.$store.state.pjsApi.infoApi.info.prev;
                    this.$store.state.pjsApi.page = this.$store.state.pjsApi.page-1;
                    // console.log(this.$store.state.pjsApi.api)
                    fetch(this.$store.state.pjsApi.api)
                    .then(res => res.json())
                    .then(res => {
                        // console.log(res);
                        this.$store.state.pjsApi.infoApi = res;
                        this.$store.state.pjsApi.apiNext = res.info.prev;
                        this.$store.state.pjsApi.apiPrev = res.info.prev;
                        this.$store.state.pjsApi.personajes = res.results;
                    })
                    .then(()=>{
                        setTimeout(() => {
                            this.$store.state.change = false;
                        }, 1500);
                    })
                    .catch(error=>console.success(error))
                }
            }, 1000);
        },
    },
    mounted() {
        // console.log('Distancia: '+document.getElementById('cards').getBoundingClientRect().top);
    },
}
</script>

<style>

</style>