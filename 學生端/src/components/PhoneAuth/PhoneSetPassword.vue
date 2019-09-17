<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6 card-panel blue-grey lighten-2">
        <div class="login card-panel black-text center">
          <i class="fa fa-user-plus" style="font-size:60px;color:#64b5f6;"></i>
          <form>
            <div class="input-field">
              <input v-model="password" type="text" placeholder="輸入密碼"/>
            </div>
            <div class="input-field">
              <input v-model="re_password" type="text" placeholder="確認輸入"/>
            </div>
            <div class="input-field">
              <button @click="setPassword" class="btn red accent-3 white-text">註冊</button>
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
    name: "phonesetpassword",
    data(){
      return {
        password : "",
        re_password : ""
      }
    },
    methods: {
      setPassword: function(e){
        var _this = this

        if(this.password != this.re_password){
          alert("2次輸入密碼不同!")
        }else if(this.password.length != 6){
          alert("密碼必須是6位!")
        } else {
          var Updateuser = firebase.auth().currentUser;
          //
          let newEmail = firebase.auth().currentUser.phoneNumber + "@nqu.com"
          let newPassword = this.password
          //
          Updateuser.updateEmail(newEmail).then(
            () => {
            Updateuser.updatePassword(newPassword).then(
              () => {

              alert("成功註冊!")
              _this.$router.go(0)
              _this.$router.push('/')
            },
              err => {
                alert(err.message)
              })
          },
            err => {
              alert(err.message)
            })
        }
        e.preventDefault()
      }
    }
  }
</script>
