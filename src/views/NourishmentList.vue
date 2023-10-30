<template>
    <h1>Lista degli alimenti</h1>

    <button class="btn btn-primary"><i class="fa-solid fa-plus fa-2xl" style="color: #ffffff;"></i>
        <router-link to="/addNourishment" class="text-light text-decoration-none">Aggiungi nuovo alimento</router-link>
    </button>

    <div v-if="isNourishment">
      <h2>Alimenti disponibili:</h2>
      <ul>
        <li v-for="nourishment in nourishmentList" :key="nourishment.id">
         
          <p><strong>Nome:</strong> {{ nourishment.nome }}</p>
          <p><strong>Marchio:</strong> {{ nourishment.marchio }}</p>
          <button @click="deleteNourishment(nourishment)">
            <i class="fa-solid fa-trash-can" style="color: #000000;">Elimina alimento</i>
          </button>
          
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Nessun alimento disponibile.</p>
    </div>
</template>


<script>
  import axios from 'axios'
  import { useGetDataFromBE } from '../stores/getDataFromBE';

  export default {
    components: {
      
    },
    data() {
        return {
            getDataFromBE: useGetDataFromBE()
        }
    },
    computed: {
        nourishmentList(){
            return this.getDataFromBE.nourishmentList
        },
        isNourishment(){
            return this.nourishmentList.length > 0
        }
    },
    methods: {
      async deleteNourishment(nourishment) {
        try {
          await axios.delete(`http://localhost:8080/Macros-app/alimenti/${nourishment.id}`);
    
          const index = this.nourishmentList.findIndex(item => item.id === nourishment.id);
          if (index !== -1) {
            this.nourishmentList.splice(index, 1);
          }
        } catch (error) {
          console.error('Errore durante l\'eliminazione:', error);
        }
      }
    },
    mounted(){
        this.getDataFromBE.getNourishment()
    }
  }
  
  </script>