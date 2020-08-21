<template>
  
  <div class="home">
    <img class="logo-ijt" alt="Vue logo" src="../assets/logo.png" /> 
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
}

</style>