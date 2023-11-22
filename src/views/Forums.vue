<template>
    <default-layout>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ul class="d-flex">
                        <li>Categorie</li>
                        <li>Tutti i post</li>
                        <li>I miei post</li>
                    </ul>
                </div>

                <div class="col-12 text-center">
                    <h1>Forum</h1>
                    <p>Benvenuto! Partecipa alle discussioni</p>
                </div>

                <div class="col-12">
                    <button>Crea un nuovo post</button>
                </div>
            </div>
        </div>
    </default-layout>
</template>


<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';

export default {
    components: {
        DefaultLayout
    }
}

</script>

<style lang="scss" scoped>
li{
    list-style: none;
    margin-right: 10px;
}

</style>