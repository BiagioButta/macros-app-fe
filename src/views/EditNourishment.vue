<template>
    <div class="container">
      <div class="row">
        <h1>Modifica alimento</h1>
      </div>
      <form @submit.prevent="updateNourishment">
        <div class="row mb-3">
            <label for="inputName" class="col-sm-2 col-form-label">Nome alimento</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputName" v-model="inputName" :placeholder="nourishment.nome">
            </div>
          </div>
          <div class="row mb-3">
          <label for="inputBrand" class="col-sm-2 col-form-label">Marchio</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputBrand" v-model="inputBrand">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputDescription" class="col-sm-2 col-form-label">Descrizione</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputDescription" v-model="inputDescription">
          </div>
        </div>
        <!-- <div class="row mb-3">
          <label for="inputImg" class="col-sm-2 col-form-label">Immagine</label>
          <div class="col-sm-10">
            <input type="file" class="form-control" id="inputImg" v-model="inputImg">
          </div>
        </div> -->
        <div class="row mb-3">
          <label for="inputKj" class="col-sm-2 col-form-label">Energia (Kj)</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputKj" v-model="inputKj">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputKcal" class="col-sm-2 col-form-label">Energia (Kcal)</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputKcal" v-model="inputKcal">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputCarbohydrates" class="col-sm-2 col-form-label">Carboidrati</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputCarbohydrates" v-model="inputCarbohydrates">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputSugar" class="col-sm-2 col-form-label">di cui zuccheri</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSugar" v-model="inputSugar">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputFats" class="col-sm-2 col-form-label">Grassi</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputFats" v-model="inputFats">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputSatured" class="col-sm-2 col-form-label">di cui saturi</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSatured" v-model="inputSatured">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputProteins" class="col-sm-2 col-form-label">Proteine</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputProteins" v-model="inputProteins">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputFibers" class="col-sm-2 col-form-label">Fibre</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputFibers" v-model="inputFibers">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputSodium" class="col-sm-2 col-form-label">Sodio</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSodium" v-model="inputSodium">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPotassium" class="col-sm-2 col-form-label">Potassio</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPotassium" v-model="inputPotassium">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputIron" class="col-sm-2 col-form-label">Ferro</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputIron" v-model="inputIron">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputZinc" class="col-sm-2 col-form-label">Zinco</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputZinc" v-model="inputZinc">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputSalt" class="col-sm-2 col-form-label">Sale</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSalt" v-model="inputSalt">
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">Salva modifiche</button>
      </form>
    </div>
</template>
  
<script>
  import axios from 'axios';
  import { useGetDataFromBE } from '../stores/getDataFromBE';
  
  export default {
    data() {
      return {
        inputName: '',
        inputBrand: '',
        inputDescription: "",
        inputImg: "",
        inputKj: "",
        inputKcal: "",
        inputCarbohydrates: "",
        inputSugar:"",
        inputFats: "",
        inputSatured: "",
        inputProteins: "",
        inputFibers: "",
        inputSodium: "",
        inputPotassium: "",
        inputIron: "",
        inputZinc: "",
        inputSalt: ""
      };
    },
    props: {
     id: {
        required: true,
        type: Number
     }
    },
    computed: {
        nourishment(){
            return this.getDataFromBE.nourishment
        }
    },
    methods: {
      async updateNourishment() {
        try {
          const updatedNourishment = {
            nome: this.inputName,
            marchio: this.inputBrand,
            descrizione: this.inputDescription,
            inputImg: this.inputImg,
            inputKj: this.inputKj,
            inputKcal: this.inputKcal,
            inputCarbohydrates: this.inputCarbohydrates,
            inputSugar: this.inputSugar,
            inputFats: this.inputFats,
            inputSatured: this.inputSatured,
            inputProteins: this.inputProteins,
            inputFibers: this.inputFibers,
            inputSodium: this.inputSodium,
            inputPotassium: this.inputPotassium,
            inputIron: this.inputIron,
            inputZinc: this.inputZinc,
            inputSalt: this.inputSalt,
          };
          await axios.put(`http://localhost:8080/Macros-app/alimenti/${this.id}`, updatedNourishment);
  
        } catch (error) {
          console.error('Errore durante l\'aggiornamento:', error);
        }
      }
    },
    mounted(){
        this.getDataFromBE.getNourishmentByID(this.id)
    }
  };
</script>
  