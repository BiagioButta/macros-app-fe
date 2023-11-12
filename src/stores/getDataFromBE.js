import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useGetDataFromBE = defineStore('getDataFromBE', {
    id: 'getDataFromBE',
    historyEnable: true,
    state: () => {
        return {
            nourishmentList: [],
            nourishment: []
        }
    },
    getters: {
      
    },
    actions: {
      async getNourishment(){
        try {
            const response = await axios.get("http://localhost:8080/Macros-app/alimenti")
            this.nourishmentList = response.data.list
            console.log('Dati ricevuti:', this.nourishmentList);
        } catch (error) {
            console.error(error)
        }
      },
      // async getNourishmentByID(id){
      //   try {
      //       const response = await axios.get(`http://localhost:8080/Macros-app/alimenti/${id}`)
      //       this.nourishment = response.data.alimento
      //       console.log('Dati ricevuti:', this.nourishment);
      //   } catch (error) {
      //       console.error(error)
      //   }
      // }
    }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGetDataFromBE, import.meta.hot));
}