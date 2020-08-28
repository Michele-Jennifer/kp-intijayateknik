<template>
    <div class="logos-wrapper">
        <h2> Welcome to our Store </h2>


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
    width: 1120px;
   overflow: visible; 
   margin: auto;
   background: rgba(223, 218, 216, 0.432);
}

.item-logos {
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