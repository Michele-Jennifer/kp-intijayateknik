<template>
  <div class="register">
    <h1>Register</h1>
    
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>

    <button @click="register" > Register </button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return{
      email: '',
      password: ''
    }
  },
  methods: {
   async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      // this.register = response.data
      console.log(response.data)
    }
      // register() {
      //   console.log('Button wa clicked!', this.email, this.password)
      // }
  }
  // ,
  // mounted () {
  //   this.register()
  // }

}
</script>