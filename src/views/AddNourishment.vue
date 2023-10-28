<template>
  <div class="container">
    <div class="row">
        <h1>Aggiungi un nuovo alimento</h1>
    </div>
    <form>
      <div class="row mb-3">
        <label for="inputName" class="col-sm-2 col-form-label">Nome alimento</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputBrand" class="col-sm-2 col-form-label">Marchio</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputBrand">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputDescription" class="col-sm-2 col-form-label">Descrizione</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputDescription">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputImg" class="col-sm-2 col-form-label">Immagine</label>
        <div class="col-sm-10">
          <input type="file" class="form-control" id="inputImg">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputKj" class="col-sm-2 col-form-label">Energia (Kj)</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputKj">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputKcal" class="col-sm-2 col-form-label">Energia (Kcal)</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputKcal">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputCarbohydrates" class="col-sm-2 col-form-label">Carboidrati</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputCarbohydrates">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputSugar" class="col-sm-2 col-form-label">di cui zuccheri</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputSugar">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputFats" class="col-sm-2 col-form-label">Grassi</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputFats">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputSatured" class="col-sm-2 col-form-label">di cui saturi</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputSatured">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputProteins" class="col-sm-2 col-form-label">Proteine</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputProteins">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputFibers" class="col-sm-2 col-form-label">Fibre</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputFibers">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputSodium" class="col-sm-2 col-form-label">Sodio</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputSodium">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPotassium" class="col-sm-2 col-form-label">Potassio</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPotassium">
        </div>
      </div>

      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Categoria</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="form-check-label" for="gridRadios1">
              Colazione
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Pranzo
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Cena
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="form-check-label" for="gridRadios2">
              Spuntino
            </label>
          </div>
        </div>
      </fieldset>

      <button type="submit" class="btn btn-primary">Salva alimento</button>
    </form>
  </div>
</template>