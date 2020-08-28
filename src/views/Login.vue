<template>
    <div id="login">
        <img class="logo-ijt" width="40" height="40" alt="Vue logo" src="../assets/logo.png" />
        
        <form>
  <div class="form-group">
    <h1>Login</h1>
    <input type="username" class="form-control" v-model="input.username" placeholder="Username">
    <small class="form-text text-muted">Username merupakan nama akun anda.</small>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" v-model="input.password" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-success mt-3" v-on:click="login()"> 
      Login 
    </button>
    <div class="form-group mt-4">
        <label> Atau </label>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-success mt-3"> 
           <router-link to="/register"> Daftar Baru </router-link>
        </button>
    </div>
        </form>

        <!-- <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button> -->
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "profile" });
                    } else {
                        alert("Username/Password anda salah");
                    }
                } else {
                    alert("Username/Password wajib diisi.");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #f8e2e2 transparent;
        margin: auto;
        margin-top: 70px;
        padding: 30px;
    }
</style>