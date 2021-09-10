<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card rounded-3">
        <div class="card-body">
          <h2 class="text-center my-4">Login</h2>
          <div class="alert-danger" v-if="error">{{error}}</div>
          <div class="form-group mt-3">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group mt-3">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
          </div>
          <div class="text-center form-group my-4">
            <button @click="loginUser()" class="btn btn-success form-control">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: '',
      error: '',
      user: {}
    }
  },

  methods: {
    loginUser(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((userCredentials) => {
        this.user = userCredentials.user
        this.error = ""
        this.$router.push('/')
      })
      .catch((error) => {
        var errorCode = error.errorCode
        var errorMessage = error.message
        this.error = errorMessage
        alert(errorMessage)
      })
    }
  }
}
</script>

<style scoped>

</style>
