<template>
    <h1>Lista degli alimenti</h1>

    <button class="btn btn-primary"><i class="fa-solid fa-plus fa-2xl" style="color: #ffffff;"></i>
        <router-link to="/addNourishment" class="text-light text-decoration-none">Aggiungi nuovo alimento</router-link>
    </button>

    <div v-if="isNourishment">
      <h2>Alimenti disponibili:</h2>
      <ul>
        <li v-for="(nourishment, index) in nourishmentList" :key="index">
         
          <p><strong>Nome:</strong> {{ nourishment.nome }}</p>
          <p><strong>Marchio:</strong> {{ nourishment.marchio }}</p>
          
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
            this.nourishmentList.length > 0
        }
    },
    methods: {
      
    },
    mounted(){
        this.getDataFromBE.getNourishment()
    }
  }
  
  </script>