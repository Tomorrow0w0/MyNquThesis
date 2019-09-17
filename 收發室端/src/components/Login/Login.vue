<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6 card-panel teal">
        <div class="login card-panel black-text center">
          <div class="card-image">
            <i class="fa fa-user-circle" style="font-size:60px;color:#f57c00;"></i>
          </div>
          <form>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input id="email" type="email" v-model="email">
              <label for="email">信箱</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input id="password" type="password" v-model="password">
              <label for="password">密碼</label>
            </div>
            <div class="input-field">
              <button v-on:click="login" class="btn orange darken-2 white-text">登入</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "login",
    data: function(){
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login: function(e){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
          .then(
            user => {
              alert(user.email+"歡迎!你已登入網頁")
              this.$router.go({path: this.$router.path})
            },
            err => {
              alert(err.message)
            })

        e.preventDefault()
      }
    }
  }
</script>

<style>

</style>
