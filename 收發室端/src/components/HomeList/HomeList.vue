<template>
  <div id="home-list">
      <form class="col s12 sticky-top">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input v-model="searchList" @input="searchActive" id="search-text" type="text">
          <label for="search-text">{{ selected }}</label>
        </div>
        <div class="row">
          <p class="col s4">
            <input v-model="selected" class="with-gap" name="group1" type="radio" id="r-dept" value="date"/>
            <label for="r-dept">日期</label>
          </p>
          <p class="col s4">
            <input v-model="selected" class="with-gap" name="group1" type="radio" id="r-id" value="name"/>
            <label for="r-id">姓名</label>
          </p>
          <p class="col s4">
            <input v-model="selected" class="with-gap" name="group1" type="radio" id="r-name" value="cntr_No"/>
            <label for="r-name">櫃號</label>
          </p>
        </div>
      </form>

      <div class="sticky-btm">
        <ul class="collection with-header">
          <li class="collection-header">
            <h5>包裹名單</h5>
          </li>
          <li v-for="list in mailroom"
              v-bind:key="list.id"
              class="collection-item">
              <div class="chip">{{ list.date }}</div>
                {{ list.name }}: {{ list.cntr_No }}
              <router-link class="secondary-content"
                           v-bind:to="{ name: 'view-list',params: { pg_No: list.pg_No }}">
                <div v-if="list.info=='未取貨'" v-bind:style="{color: 'red'}">
                  <i class="material-icons">new_releases</i>
                  {{ list.info }}
                </div>
                <div v-else="list.info=='已取貨'">
                  <i class="material-icons">check_circle</i>
                  {{ list.info }}
                </div>
              </router-link>
          </li>
          <li class="collection-item list-end">
            End
          </li>
        </ul>
      </div>
    <div class="fixed-action-btn horizontal click-to-toggle">
      <a class="btn-floating btn-large indigo darken-1">
        <i class="material-icons i-35">more_vert</i>
      </a>
      <ul>
        <li>
          <router-link to="/dow" class="btn-floating teal accent-3">
            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/qrscanner" class="btn-floating purple lighten-1">
            <i class="material-icons i-35">fullscreen</i>
          </router-link>
        </li>
        <li>
          <router-link to="/add" class="btn-floating yellow accent-4">
            <i class="material-icons i-35">add</i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import db from "../FirebaseLink/FirebaseInit"

  export default {
    name: "home-list",
    data(){
      return {
        mailroom: [],
        searchList: '',
        selected: '填選以下按鈕,再搜尋',
        "cntr_No": null
      }
    },
    created: function(){
      db.collection("Mailroom").orderBy("date").get().then
      (querySnapshot => {
        querySnapshot.forEach(doc => {
         // console.log(doc);
          if(doc.data().cntr_No == null)
          {
            switch(doc.data().gpio_No)
            {
              case 4:
                this.cntr_No = "智慧櫃1號"
                break;
              case 18:
                this.cntr_No = "智慧櫃2號"
                break;
            }
          }else{
            this.cntr_No = doc.data().cntr_No
          }
          const data = {
            "id": doc.id,
            "name": doc.data().name,
            "title": doc.data().title,
            "date": doc.data().date,
            "pg_No": doc.data().pg_No,
            "phone": doc.data().phone,
            "cntr_No": this.cntr_No,
            "info": doc.data().info
          }
          this.mailroom.push(data)
        })
      })
    },
    methods: {
      searchActive:function(){
        var searchList = this.searchList;
        var selected = this.selected;

        if(searchList!=''){
          this.mailroom.length = 0;
          db.collection("Mailroom").where(selected, "==", searchList)
            .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              // console.log(doc.data());
              const data = {
                "id": doc.id,
                "name": doc.data().name,
                "title": doc.data().title,
                "date": doc.data().date,
                "pg_No": doc.data().pg_No,
                "phone": doc.data().phone,
                "cntr_No": this.cntr_No,
                "info": doc.data().info
              }
              this.mailroom.push(data)
            })
          })
        }else{
          this.mailroom.length = 0;
          db.collection("Mailroom").orderBy("date").get().then
          (querySnapshot => {
            querySnapshot.forEach(doc => {
              // console.log(doc.data());
              const data = {
                "id": doc.id,
                "name": doc.data().name,
                "title": doc.data().title,
                "date": doc.data().date,
                "pg_No": doc.data().pg_No,
                "phone": doc.data().phone,
                "cntr_No": this.cntr_No,
                "info": doc.data().info
              }
              this.mailroom.push(data)
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
  .sticky-top{
    padding: 2px 0 0 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 1;
    background-color: #fffded;
  }
  .sticky-btm{
    z-index: -1;
  }
  .i-35{
    font-size: 35px;
  }
  .list-end{
    text-align: center;
    font-size: 20px;
  }
</style>
