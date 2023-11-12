<template>
    <div class="jumbotron">
      <h2 class="text-center">Le ricette più votate della settimana</h2>
      <carousel :items-to-show="5">
        <slide v-for="img in imgJumbo" :key="img.id">
          <img :src="img" :alt="img.id">
        </slide>
      
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      imgJumbo: [
        "src/assets/img/135423_1647293276.jpg",
        "src/assets/img/156797_1647103210.jpg",
        "src/assets/img/144566_1647192075.jpg",
        "src/assets/img/370634_1647203724.jpg",
        "src/assets/img/101775_1647208756.jpg",
        "src/assets/img/376222_1647185962.jpg",
        "src/assets/img/166182_1646471993.jpg",
      ]
    }
  },
}

</script>

<style lang="scss" scoped>
.jumbotron{
    width: 100%;
    height: 450px; 
    img{
      width: 350px;
    }
}
</style>