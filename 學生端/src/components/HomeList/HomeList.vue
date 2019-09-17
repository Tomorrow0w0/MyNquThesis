<template>
  <div id="home-list">
        <ul class="collection with-header">
          <li class="collection-header">
            <h5>包裹名單</h5>
          </li>
          <li v-for="list in stu_pg"
              v-bind:key="list.id"
              class="collection-item">
            <div class="chip">{{ list.contents }}</div>
            <router-link class="secondary-content"
                         v-bind:to="{ name: 'view-list',params: { pg_No: list.pg_No }}">
              <i class="fa fa-qrcode i-35"></i>
            </router-link>
          </li>
          <li class="collection-item list-end">
            End
          </li>
        </ul>
    <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large blue darken-4">
        <i class="material-icons i-35">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import db from "../FirebaseLink/FirebaseInit"

  export default {
    name: "home-list",
    data(){
      return {
        stu_pg: []
      }
    },
    created: function(){
      let currentUser = firebase.auth().currentUser.phoneNumber

      db.collection("students").doc(currentUser).collection("package").get().then
      (querySnapshot => {
        querySnapshot.forEach(doc => {
         // console.log(doc);
          const data = {
            "id": doc.id,
            "contents": doc.data().contents,
            "pg_No": doc.data().pg_No
          }
          this.stu_pg.push(data)
        })
      })
    },
    methods: {
    }
  }
</script>

<style scoped>
  .i-35{
    font-size: 35px;
  }
  .list-end{
    text-align: center;
    font-size: 20px;
  }
</style>
