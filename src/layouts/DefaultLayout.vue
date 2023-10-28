<template>
    <div class="container">

        <div class="row">
            <Header/>
        </div>

        <div class="row">

            <div id="main">
                <slot/>
            </div>
            
        </div>
        
        <div class="row">
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import Header from '../views/Header.vue';
import Footer from '../views/Footer.vue';
</script>

<style lang="scss" scoped>


</style>