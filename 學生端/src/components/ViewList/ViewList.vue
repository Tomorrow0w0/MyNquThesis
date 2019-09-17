<template>
  <div id="view-list">
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <div v-if="qr_key != null">
              <vue-qr :bgSrc="src" :text="qr_key" :autoColor="true" :margin="10" :size="300">
              </vue-qr>
            </div>
          </div>
          <div class="card-content">
            <span class="card-title">{{ contents }}</span>
            <p>包裹號碼: {{ pg_No }}</p>
          </div>
          <div class="card-action">
            <router-link to="/" class="btn grey">返回</router-link>
            <button @click="deleteStu" class="btn red">刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import db from "../FirebaseLink/FirebaseInit"
  import VueQr from 'vue-qr'

  export default {
    name: "view-list",
    components:{
      VueQr
    },
    data(){
      return {
        "contents": null,
        "pg_No": null,
        "qr_key": null,
        "src": require('./nqulogo.png')
      }
    },
    beforeRouteEnter(to, from, next){
      let currentUser = firebase.auth().currentUser.phoneNumber
      db.collection("students").doc(currentUser).collection("package")
        .where("pg_No", "==", to.params.pg_No)
        .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.contents = doc.data().contents,
              vm.pg_No = doc.data().pg_No
            })
          })
        })
    },
    watch: {
      "$router": "fetchData"
    },
    methods: {
      fetchData(){
        let currentUser = firebase.auth().currentUser.phoneNumber
        db.collection("students").doc(currentUser).collection("package")
          .where("pg_No", "==", this.$route.params.pg_No)
          .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.contents = doc.data().contents,
              this.pg_No = doc.data().pg_No
            })
          })
      },
      deleteStu(){
        let currentUser = firebase.auth().currentUser.phoneNumber
          db.collection("students").doc(currentUser).collection("package")
            .where("pg_No", "==", this.$route.params.pg_No)
            .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/')
            })
          })
      },
      scannerqr(val){
        var _this = this
        setTimeout(function () {
          db.collection("Mailroom").doc(val)
            .onSnapshot(function(doc) {
              //console.log(doc.data());
              if(doc.data().info == "已取貨"){
                _this.deleteStu()
              }
            });
        }, 500);
      }
    },
    mounted(){
      this.$nextTick(()=>{
        db.collection("Mailroom")
          .where("pg_No", "==", this.$route.params.pg_No)
          .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.qr_key = doc.id
            this.scannerqr(this.qr_key)
          })
        })
      })
    }
  }
</script>

<style scoped>

</style>
