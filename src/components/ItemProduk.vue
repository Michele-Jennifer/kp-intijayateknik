<template>
    <div>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label item mb-3" v-bind:class="{'item-completed':daftar.getSelect}" for="defaultCheck1"> 
                {{daftar.nama}} </label>
    </div>
</template>

<script>
export default {
    name : "ItemProduk",
    props : ["daftar"]
};
</script>

<style>

</style>