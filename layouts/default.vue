<template>
    <div>
        <!-- <h1>asdasd</h1> -->
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
  </template>
  <script>
  import TheFooter from "~~/componants/TheFooter.vue";
  import TheHeader from "~~/componants/TheHeader.vue";
  export default {
    components :{
        TheFooter,
        TheHeader
    }
  }
</script>