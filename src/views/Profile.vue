<template>
  <div class="profile">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="media text-left">
                    <img src="../assets/profile.jpg" class="user-pic mr-3" />
                    <div class="media-body">
                        <h5 class="mt-0">{{ username }}</h5>
                         <p>
                        username : {{username}} <br>
                        No.Hp : {{noHp}} <br>
                        Alamat : Jln. kemuning no.2B
                        </p>
            
                    </div>
                </div>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: "Profile",
  data: function() {
      return {
      username : 'Michele',
      noHp : '08xxxxxxxx84'
      }
  },
  mounted:{
    
  },
  components: {}
};
</script>

<style scoped>

.user-pic {
    height: 120px;
    width: 120px;
    border-radius: 200%;
}

</style>