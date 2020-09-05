<template>
  
  <div class="home">
    <!-- <img class="img-fluid" alt="Vue logo" src="../assets/banner1.png" />  -->
    
    <div class="row header mb-5 p-3">
      <div class="col-lg-12">
        <h2> Welcome To Our Store</h2>
      </div>
    </div>
    
    <div class="container">
      <Slider />
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

<style scoped>
.banner{
   /* overflow: visible;  */
   margin: auto;
   background: rgba(223, 218, 216, 0.432);
}

.container{
  height: 600px;
  position: sticky;
  color: forestgreen;
}

.header {
  background-color: limegreen;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: whitesmoke;
}
</style>