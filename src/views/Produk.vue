<template>
  <div class="product">
        <!-- <div class="container"> -->
        <div class="row header mb-5 p-2">
            <div class="col-lg-12">
                <h2> Daftar Produk </h2>
            </div>
        </div>

        <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="card" style="width: 15rem;" v-for="item in produk" :key="item.id">
                    <img :src="require('../assets/'+item.src)" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title"> {{item.nama}} </p>
                        <p class="card-text"> Rp {{item.harga}},00 </p>
                        <p class="card-text"> <b> (Stok : {{item.stok}}) </b> </p>
                        <a href="#" class="btn btn-primary"> Masukkan Keranjang </a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <cart />
            </div>
        </div>    
        </div>
        
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import Cart from "../components/Cart.vue"
// import produk from "../mock/produk.json"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Product",
  
  computed: {
      ...mapGetters(["produk"])
  },
  methods: {
      ...mapActions(["getProducts"])
  },
  mounted() {
     this.getProducts();
  },
  components: {
    Cart
  }
};
</script>

<style>
.header {
  background-color: limegreen;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: whitesmoke;
}

.item-completed {
    color:rgba(0, 255, 55, 0.568);
}

.card {
    border: none;
    padding: 20px;
}


</style>