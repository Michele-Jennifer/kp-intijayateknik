<template>
    <div class="logos-wrapper">
        <h1> Welcome to our Store </h1>
        <div class="item-logos">
            <img class="logo" src="../assets/logo1.png" alt="logo1">
        </div>
        <div class="item-logos">
            <img class="logo" src="../assets/logo2.png" alt="logo2">
        </div>
        <div class="item-logos">
            <img class="logo" src="../assets/logo3.png" alt="logo3">
        </div>
        <div class="item-logos">
            <img class="logo" src="../assets/logo4.png" alt="logo4">
        </div>
        <div class="item-logos">
            <img class="logo" src="../assets/logo5.png" alt="logo5">
        </div>
    </div>
</template>

<script>
export default {
   name: "CobaCoba"
};
</script>

<style scoped>
.logos-wrapper {
    width: 70%;
   overflow: visible; 
   margin: auto;
   background: rgb(255, 212, 196);
}

.item-logos {
    width: 200px;
    height: 200px;
    background: lightgoldenrodyellow;
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;
}

.item-logos .logo {
    width: 190px;
    height: 190px;
}

</style>