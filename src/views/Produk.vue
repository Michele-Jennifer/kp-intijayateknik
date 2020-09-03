<template>
  <div class="product">
        <!-- <div class="container"> -->
        <div class="row header mb-2 p-2">
            <div class="col-lg-12">
                <h2> Daftar Produk </h2>
            </div>
        </div>

        <div class="container">
        <div class="row">
            <cart />
        </div>
        <div class="row">
                <div class="card" style="width: 12rem; height: 18rem;" v-for="item in produk" :key="item.id">
                    <img :src="require('../assets/'+item.src)" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title"> {{item.nama}} </h5>
                        <p class="card-text"> Rp {{item.harga}},00 </p>
                        <p class="card-text"> <b> (Stok : {{item.stok}}) </b> </p>
                        <a href="#" class="btn btn-primary"> Masukkan Keranjang </a>
                    </div>
                </div>
            </div>
        </div>
        

  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import Cart from "../components/Cart.vue"

export default {
  name: "Product",
  data: function() {
    return {
        produk: [
            { 
                id : 1,
                nama : "Lampu LED",
                harga : 16000,
                src : "logo1.png",
                stok : 3
            },
            { 
                id : 2,
                nama : "Baterai",
                harga : 3500,
                src : "logo2.png",
                stok : 20
            },
            { 
                id : 3,
                nama : "Stopkontak",
                harga : 10000,
                src : "logo3.png",
                stok : 5
            },
            { 
                id : 4,
                nama : "Steker",
                harga : 18000,
                src : "logo4.png",
                stok : 11
            }
        ]
    };
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

}


</style>