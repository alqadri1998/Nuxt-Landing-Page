<template>
      <div class="member">
        <div class="member-img">
          <img :src="`${url}/images/admins/${member.admin_image}`" class="img-fluid" alt="">
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>{{ member.name }}</h4>
          <span>{{ member.email }}</span>
          <p>{{ member.mobile }}</p>
        </div>
      </div>
    
</template>
<script setup>
const config = useRuntimeConfig()
const {member} = defineProps(['member'])
const url = config.public.baseURL
</script>
