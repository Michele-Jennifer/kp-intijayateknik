<template>
  
  <div class="home">
    <!-- <img class="img-fluid" alt="Vue logo" src="../assets/banner1.png" />  -->
    <div class="container">
      <Slider />
    </div>
    <div class="banner">
      <h2> Welcome to our Store </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from "@/components/HelloWorld.vue";

import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    
    Slider
  }
};
</script>

<style>
.banner{
   
   overflow: visible; 
   margin: auto;
   background: rgba(223, 218, 216, 0.432);
}

.container{
  margin: auto;
  height: 600px;
}
</style>