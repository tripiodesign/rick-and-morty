<template>
    <div id="listaPj">
        <!-- Lista de personajes -->
        <div class="accordion p-0 m-0" role="tablist">
            <div>
                <b-button
                v-b-toggle.seccion1
                block
                squared
                variant="dark"
                class="text-light border-0 mt-0 py-1 d-flex justify-content-between align-items-center"
                >Personajes y sus episodios <b-icon icon="card-heading"></b-icon></b-button
                >
                <b-collapse
                id="seccion1"
                class="overflow-auto"
                style="max-height: 86.7vh;"
                >
                    <b-list-group class="flex-column p-0">
                        <b-list-group-item
                        v-for="(pj, i) in $store.state.pjsApi.personajes"
                        :key="pj.id" role="tablist"
                        class="bg-dark flex-column p-0 border-0 rounded-0 accordion"
                        >
                            <h6 class="m-0 py-1 px-2 text-danger bg-dark d-flex justify-content-between align-items-center" style="border-bottom: 1px solid">
                                <b-button 
                                :href="'#pj'+pj.id"
                                variant="outline-light" 
                                class="m-0 border-0 text-left" 
                                style="font-size:.8em;">
                                    {{pj.id}} • {{ pj.name }}
                                </b-button>
                                <b-button
                                    v-b-toggle="'epis'+i"
                                    variant="outline-light"
                                    class="m-0 border-0 text-left"
                                    style="font-size:.8em;"
                                >
                                    <b-icon icon="chevron-down"></b-icon>
                                </b-button>
                            </h6>
                            <b-collapse :id="'epis'+i" style="border-bottom: 1px solid">
                                <b-list-group class="">
                                    <b-list-group-item class="p-0 bg-transparent border-0 rounded-0" v-for="(epi, idc) in $store.state.pjsApi.personajes[i].episode" :key="idc">
                                        <b-button block squared variant="outline-danger" type="" class="text-left border-0 d-flex align-items-center justify-content-between" style="font-size: .7em" :to="{name: 'Episodio', params: {api: epi}}"
                                        >
                                            <p class="m-0">•> Capitulo: {{epi.split('/').pop('')}}</p>
                                            <b-icon icon="play-circle-fill"></b-icon>
                                        </b-button>
                                    </b-list-group-item>
                                </b-list-group>
                            </b-collapse>
                        </b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'ListaPj'
}
</script>

<style>

</style>