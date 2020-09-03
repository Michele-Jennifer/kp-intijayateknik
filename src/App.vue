<template>
  <div id="app">
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand h1" href="#">
    <img src="../src/assets/logo.png" width="30" height="30" class="d-inline-block align-top" loading="lazy">
    Inti Jaya Teknik</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link ml-4 mt-2" href="#">
          <router-link to="/"> Home </router-link>
           <!-- <span class="sr-only">(current)</span> -->
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link mt-2">
          <router-link to="/product">Product</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link mt-2">
          <router-link to="/about">About</router-link>
        </a>
      </li>
      <li class="nav-item">

            <a v-if="!authenticated" class="nav-link">
              <button type="button" class="btn btn-success">
              <router-link to="/login"> 
                <svg width="18" height="18" viewBox="0 0 16 16" class="bi bi-person-fill text-white mb-1" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                Login 
              </router-link>
              </button>
            </a>

            <a v-else class="nav-link" href="#">
            <router-link to="/login" v-on:click.native="logout()">
              <button type="button" class="btn btn-outline-success my-2 my-sm-0">
                <svg width="15" height="15" viewBox="0 0 16 16" class="bi bi-box-arrow-left " fill="currentColor">
                  <path fill-rule="evenodd" d="M4.354 11.354a.5.5 0 0 0 0-.708L1.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                  <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5z"/>
                  <path fill-rule="evenodd" d="M14 13.5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 14 2.5H7A1.5 1.5 0 0 0 5.5 4v1.5a.5.5 0 0 0 1 0V4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 0-1 0V12A1.5 1.5 0 0 0 7 13.5h7z"/>
                </svg>
                Logout
              </button>
            </router-link>
            </a>
          
      </li>
      <li class="nav-item">
        <a class="nav-link mt-2">
          <router-link to="/profile">Profile</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link mt-2">
          <router-link to="/posts">Post</router-link>
        </a>
      </li>


    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>
    <router-view @authenticated="setAuthenticated" />
 </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
    export default {
        name: "app",
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "Michele",
                    password: "12345"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app a {
  font-weight: bold;
  color: #f2f6fa;
}

#app a.router-link-exact-active {
  color: #42b983;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
