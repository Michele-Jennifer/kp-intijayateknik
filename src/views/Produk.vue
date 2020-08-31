<template>
  <div class="product">
        <!-- <div class="container"> -->
        <div>
            <Slider />
        </div>

        <div class="row header mb-5 p-3">
            <div class="col-lg-12">
                <h2> Daftar Produk </h2>
            </div>
        </div>



        <!-- <div class="row content">
            <div class="col-lg-12">
                <div class="jenis-produk">
                    <div v-for="daftar in produk" v-bind:key="daftar.id" class="daftar-produk text-left">
                        <ItemProduk v-bind:daftar="daftar" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->


  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import Slider from "@/components/Slider.vue";

export default {
  name: "Product",
  data: function() {
    return {
        produk: [
            { 
                id : 1,
                nama : "Lampu LED",
                getSelect : false
            },
            { 
                id : 2,
                nama : "Baterai",
                getSelect : false
            },
            { 
                id : 3,
                nama : "Stopkontak",
                getSelect : false
            },
            { 
                id : 4,
                nama : "Steker",
                getSelect : false
            }
        ]
    };
  },
  components: {
    // ItemProduk,
    Slider
  }
};
</script>

<style>
.header {
  background: lightgreen;
}

.item-completed {
    color:rgba(0, 255, 55, 0.568);

}
</style>