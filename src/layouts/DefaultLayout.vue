<template>

    <div class="header">
        <Header/>
    </div>

    <div class="container">
        <div id="main">
            <slot/>
        </div>
        
    </div>
    
    <div class="row">
        <Footer/>
    </div>
  
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../views/Footer.vue';
</script>

<style lang="scss" scoped>

.header{
    width: 100%;
}

</style>