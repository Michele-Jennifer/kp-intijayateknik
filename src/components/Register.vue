<template>
  <div class="register">

    <input
      type="name"
      name="name"
      v-model="name"
      placeholder="username" />
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
      name: '',
      password: ''
    }
  },
  methods: {
   async register() {
      const response = await AuthenticationService.register({
        name: this.name,
        password: this.password
      })

      console.log(response.data)
    }
  }

}
</script>