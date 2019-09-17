<template>
  <div id="add-list">
    <h3>新增包裹</h3>
    <div class="row">
      <form @submit.prevent="saveStudent" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="contents" required>
            <label>內容物 :</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="pg_No" required>
            <label>包裹編碼 :</label>
          </div>
        </div>
        <button type="submit" class="btn">提交</button>
        <router-link to="/" class="btn grey">取消</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import db from "../FirebaseLink/FirebaseInit"
  export default {
    name: "add-list",
    data(){
      return {
        "contents": null,
        "pg_No": null
      }
    },
    methods: {
      saveStudent(){
        let currentUser = firebase.auth().currentUser.phoneNumber

        db.collection("students").doc(currentUser).collection("package").add({
          "contents": this.contents,
          "pg_No": this.pg_No
        })
          .then(docRef => this.$router.push("/"))
          .catch(error => console.log(error))
      }
    }
  };
</script>

<style>

</style>
