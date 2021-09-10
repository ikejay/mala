<template>
  <div class="row my-5 ">
    <div class="col-md-6 offset-md-3">
      <div class="card rounded">
        <div class="card-body">
          <h2 class="text-center my-4">Sign Up</h2>
          <div class="alert-danger" v-if="error">{{error}}</div>
          <div class="form-group mt-3">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
          </div>
          <div class="form-group mt-3">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group mt-3">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
          </div>
          <div class="text-center form-group my-4">
            <button @click="registerUser()" class="btn btn-success form-control">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/database'

export default {
  name: "Signup",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      user: {},
      error: ''
    }
  },
  methods: {
    registerUser(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredentials) => {
        firebase.database().ref('Users/' + userCredentials.user.uid).set({
          id: userCredentials.user.uid,
          name: this.name,
          email: this.email,
          password: this.password,
          profile_pic: 'https://www.freeiconspng.com/downloadimg/25493'
        })

        console.log(userCredentials)
        this.user = userCredentials.user
        this.$router.push('/login')
      })
      .catch((error) => {
        console.log(error)
        var errorCode = error.code
        var errorMessage = error.message
        this.error = errorMessage
      })
    }
  }
}
</script>

<style scoped>

</style>
