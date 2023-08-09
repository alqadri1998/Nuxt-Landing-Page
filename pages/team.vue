<template>
  <main id="main">

    <!-- ======= Our Team Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Our Team</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Our Team</li>
          </ol>
        </div>

      </div>
    </section><!-- End Our Team Section -->

    <!-- ======= Team Section ======= -->
    <section class="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div class="container">
          <h1 v-if="error"> SomeThing Went wrong </h1>
          <h1 v-else-if="pending"> Looding... </h1>

        <div class="row">
          <div v-for="member in members"
           class="col-lg-4 col-md-6 d-flex align-items-stretch" >
           <MemberCard :member="member" />
          </div>

          <!-- <div v-html="data"></div> -->



        </div>

      </div>
    </section><!-- End Team Section -->

  </main><!-- End #main -->
</template>

<!-- <script >
import MemberCard from '~~/componants/team/TeamMemmber.vue';
export default {
    components: {
       
        MemberCard
    } , 
    data () {
    return {
      members: []
    }
  },
  async fetch () {
    // this.members = await this.$http.$get('https://jsonplaceholder.typicode.com/posts')
    this.members = await fetch(
     'http://127.0.0.1:8000'
      ).then(res => console.log(res.json()))
    //  this.members = await useJsonP('')
    // console.log(useMyFetch());
    
  }
}
</script> -->
<script setup>
import MemberCard from '~~/componants/team/TeamMemmber.vue';
// setTimeout(()=>{

  const {  pending, data : members , error } = await useFetch('http://127.0.0.1:8000/api/members')
// },1000)
</script>
