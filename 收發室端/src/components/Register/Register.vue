<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6 card-panel blue-grey lighten-2">
        <div class="login card-panel black-text center">
          <i class="fa fa-user-plus" style="font-size:60px;color:#64b5f6;"></i>
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
              <button v-on:click="register" class="btn red accent-3 white-text">註冊</button>
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
    name: "register",
    data: function(){
      return {
       email: "",
       password: ""
      }
    },
    methods: {
     register: function(e){
       firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
         .then(
           user => {
             alert(user.email+"註冊成功")
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

