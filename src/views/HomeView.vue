<template>

  <default-layout>

    <button @click="fetchData">Prova per effettuare Chiamata API</button>

  </default-layout>
  
</template>

  <script>
  import axios from 'axios'
  import DefaultLayout from '../layouts/DefaultLayout.vue';

  export default {
    components: {
      DefaultLayout
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:8080/Macros-app/alimenti');
          const data = response.data;
          console.log('Dati ricevuti:', data);

        } catch (error) {
          console.error('Errore durante la chiamata API:', error);

        }
      }
    }
  }
  
  </script>
