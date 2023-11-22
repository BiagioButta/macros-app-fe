<template>

  <default-layout>
   
      <Jumbo/>
    
  </default-layout>

</template>

<script>
import axios from 'axios'
import Jumbo from '../components/Jumbo.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue';
export default {
  components: {
    DefaultLayout,
    Jumbo
  },
  data() {
    return {
    }
  },
}

</script>

<style lang="scss" scoped>

</style>