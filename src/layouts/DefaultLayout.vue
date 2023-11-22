<template>

    <div class="header">
        <Header/>
    </div>

    <div>
        <slot/>
    </div>
    
    <div class="footer">
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