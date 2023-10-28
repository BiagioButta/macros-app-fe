<template>
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-3">
        <router-link class="navbar-brand" to="/">Logo</router-link>

        <!-- Toggle menù per il responsive -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Accedi</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/nourishmentList">Vai ai tuoi alimenti</router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Cerca" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Cerca</button>
          </form>
        </div>
    </nav>
 
</template>