<template>
  
  <div class="home">
    <img class="img-fluid" alt="Vue logo" src="../assets/banner1.png" /> 
    
    <CobaCoba />
  </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from "@/components/HelloWorld.vue";
import CobaCoba from "@/components/CobaCoba.vue";

export default {
  name: "Home",
  components: {
    CobaCoba
  }
};
</script>

<style>
.logo-ijt {
  
  margin: auto;
}

</style>