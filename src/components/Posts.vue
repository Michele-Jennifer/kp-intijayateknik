<template>
  <div class="posts">
    <div class="row header mb-5 p-3">
      <div class="col-lg-12">
        <h2> Halaman Admin</h2>
      </div>
    </div>
    <div class ="container">
        <button class="btn btn-success mt-5 mb-5"
            @click="addNewProductForm">
           Tambahkan Produk
        </button>

        <div class="card mb-3"
          v-for="(produk, index) in daftarproduk" v-bind:key="index">
          <div class="card-body">
             <span class="float-right" 
              style="cursor:pointer"
              @click="deleteProduct(index)">
                <b>X</b>
             </span>
             <h4 class="card-title mb-4"> Produk Baru (Index:{{index}} ) </h4>
             
             <div class="form-produk">
                <input type="text" class="form-control mb-2" 
                 v-model="produk.Nama" placeholder="Kode">           
                <input type="text" class="form-control mb-2" 
                 v-model="produk.Nama" placeholder="Nama"> 
                <input type="text" class="form-control mb-5" 
                 v-model="produk.Harga" placeholder="Harga">
                
                <label for="File1" Class="float-left">Input File Gambar</label>
                <input type="file" class="form-control-file" id="File1"> 

                <!-- <img src="..." class="rounded float-left" alt="..."> -->
                <img class="rounded float-left">
              </div>
          </div>
        </div>
    </div>

    <!-- <div v-for="post in posts" v-bind:key="post.id">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div> -->
  </div>
</template>

<script>

// import PostsService from '../services/PostService'
export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      daftarproduk: [
        {
          Kode: '',
          Nama: '',
          Harga: ''
        }
      ]
    }
  },
  // mounted () {
  //   this.getPosts()
  // },
  methods: {
    // async getPosts () {
    //   const response = await PostsService.fetchPosts()
    //   this.posts = response.data
    // },

    addNewProductForm (){
      this.daftarproduk.push({
          Nama: '',
          Kode: '',
          Harga: ''
      })
    },

    deleteProduct (index){
        this.daftarproduk.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: limegreen;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: whitesmoke;
  
}

</style>