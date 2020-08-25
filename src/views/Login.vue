<template>
    <div id="login">
        <img class="logo-ijt" alt="Vue logo" src="../assets/logo.png" />
        
        <form>
  <div class="form-group">
    <h1>Login</h1>
    <label for="Username mt-3">Username</label>
    <input type="username" class="form-control" id="username">
    <small class="form-text text-muted">Username merupakan nama akun anda.</small>
  </div>
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password1">
  </div>

  <button type="submit" class="btn btn-success mt-3">Submit</button>
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
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #f8e2e2;
        margin: auto;
        margin-top: 70px;
        padding: 30px;
    }
</style>