<template>
    <div class="row justify-content-center align-items-center">
      <div class="col d-flex align-items-stretch justify-content-center align-items-center">
        <h1 class="name-app">MyMacros</h1>
      </div>
    </div>

    <div class="row align-items-center navbar">

        <div class="col">
            <ul class="m-auto">
                <li>LOGO</li>
            </ul>
        </div>

        <div class="col">
          <ul class="d-flex flex-row justify-content-between m-auto">
            <li 
            v-for="link in navbarLinks" :key="link.name"
            >
                <router-link :to="link.url">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="d-flex flex-row justify-content-end m-auto me-4">
            <li><router-link to="/signIn">Accedi</router-link></li>
          </ul>
        </div>

    </div>
</template>

<script>
export default {
  components: {
   
  },
  data() {
    return {
      navbarLinks: [
        { name: 'Home', url: '/' },
        { name: 'I miei alimenti', url: '/nourishmentList' },
        { name: 'I miei Piatti', url: '/dishes' },
        { name: 'Blog', url: '/blog' },
        { name: 'Gruppi', url: '/groups' },
        { name: 'Forum', url: '/forums' },
        { name: 'Info', url: '/info' },
        { name: 'Contatti', url: '/contacts' },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.name-app{
  margin: 0;
}

.navbar{
    background-color: #F1F1F1;
    li{
        text-decoration: none;
        list-style: none;
    }
}
</style>