<template>
    <div id="listaPj">
        <!-- Lista de personajes -->
        <div class="accordion p-0 m-0" role="tablist">
            <div>
                <b-button
                v-b-toggle.seccion1
                block
                square
                variant="dark"
                class="text-light border-0 mt-0 rounded-0 py-1 d-flex justify-content-between align-items-center"
                >Personajes <b-icon icon="card-heading"></b-icon></b-button
                >
                <b-collapse
                id="seccion1"
                class="overflow-auto"
                style="max-height: 86.7vh;"
                >
                    <b-list-group class="flex-column p-0">
                        <b-list-group-item
                        v-for="(pj) in $store.state.pjsApi.personajes"
                        :key="pj.id"
                        class="bg-dark d-flex p-0 border-0"
                        >
                            <b-button
                                :href="'#pj'+pj.id"
                                variant=""
                                class="m-0 bg-info text-light pl-1 pr-3 py-2"
                                style="border-radius: 0 45px 45px 0; font-size: .8em;"
                            >
                             {{pj.id}} • {{ pj.name }}
                            </b-button>
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