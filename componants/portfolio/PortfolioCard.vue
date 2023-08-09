<template>
    <div >
        <div class="portfolio-item">
            <img :src="image" class="img-fluid" alt="">
            <div class="portfolio-info">
                <h3>{{ title }}</h3>
                
                <div>
                    <a :href="link" data-gallery="portfolioGallery"
                        class="portfolio-lightbox" :title="link"><i class="bx bx-planet"></i></a>
                        <!-- <nuxt-link :to="{path:'portfolio-details' , }" active-class="active"><i class="bx bx-link"></i></nuxt-link> -->
                    <router-link :to="{ path: 'portfolio-details/'+ id  }"  active-class="active"><i class="bx bx-link"></i></router-link>
                    <!-- <a href="portfolio-details.html" title="Portfolio Details"></a> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
  // icon: {
  //   type: String,
  //   default: '🙂'
  // },
  title:{
    type: String,
    default: '🙂'
  },
  link:{
    type: String,
    default: ''
  },
  image:{
    type: String,
    default: '🙂'
  },
  id:{
    type: Number,
    default: 1
  }
})
</script>
