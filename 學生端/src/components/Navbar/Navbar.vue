<template>
  <nav>
    <div class="nav-wrapper orange darken-2">
      <router-link to="/" class="brand-logo">NQU學生包裹</router-link>
      <router-link to="/" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></router-link>

      <ul class="right hide-on-med-and-down">
        <li v-if="isLoggedIn"><span class="email">{{currentUser}}</span></li>
        <li v-if="isLoggedIn"><router-link to="/">名單</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/phonesignup">註冊</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">登入</router-link></li>
        <li v-if="isLoggedIn"><a v-on:click="logout">登出</a></li>
      </ul>

      <ul class="side-nav lime lighten-5" id="mobile-demo">
        <li v-if="isLoggedIn">
          <div class="chip">
            <img src="./headerlogo.png" alt="Contact Person">
              {{currentUser}}
          </div>
        </li>
        <li v-if="isLoggedIn"><router-link to="/"><i class="fa fa-address-book i-25"></i>名單</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/phonesignup"><i class="fa fa-user-plus i-25"></i>註冊</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login"><i class="fa fa-user-circle i-25"></i>登入</router-link></li>
        <li v-if="isLoggedIn"><a v-on:click="logout"><i class="material-icons i-25">directions_walk</i>登出</a></li>
      </ul>

    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "navbar",
    data() {
      return{
        isLoggedIn: false,
        currentUser: false
      }
    },
    mounted() {
      $('.button-collapse').sideNav();
    },
    created() {
      if(firebase.auth().currentUser){
        this.isLoggedIn = true
        this.currentUser = firebase.auth().currentUser.email
      }
    },
    methods: {
     logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.go({path: this.$router.path})
      })
     }
    }
  }
</script>

<style scoped>
  .side-nav{
    top: 56px;
    width: 250px;
  }
  .i-25{
       font-size: 25px;
  }
  .email{
    padding-right: 10px;
  }
</style>
