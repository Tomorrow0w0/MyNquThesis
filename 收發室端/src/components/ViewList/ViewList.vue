<template>
  <div id="view-list">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">
        職稱: {{ title }}
      </li>
      <li class="collection-item">
        日期: {{ date }}
      </li>
      <li class="collection-item">
        包裹號碼: {{ pg_No }}
      </li>
      <li class="collection-item">
        手機: {{ phone }}
      </li>
      <li class="collection-item">
         {{ cntr_No }}
      </li>
      <li class="collection-item">
        狀態: {{ info }}
      </li>
      <li class="collection-item">
        簡訊狀態: {{ sms_info }}
      </li>
    </ul>
    <router-link to="/" class="btn grey">返回</router-link>
    <button @click="deleteStu" class="btn red">刪除</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name:'edit-list',
      params:{pg_No:pg_No}}"
      class="btn-floating btn-large indigo darken-1">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from "../FirebaseLink/FirebaseInit"
  export default {
    name: "view-list",
    data(){
      return {
        "name": null,
        "title": null,
        "date": null,
        "pg_No": null,
        "phone": null,
        "cntr_No": null,
        "info": null,
        "sms_info": null
      }
    },
    beforeRouteEnter(to, from, next){
      db.collection("Mailroom").where("pg_No", "==", to.params.pg_No).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              if(doc.data().cntr_No == null)
              {
                switch(doc.data().gpio_No)
                {
                  case 4:
                    vm.cntr_No = "智慧櫃1號"
                    break;
                  case 18:
                    vm.cntr_No = "智慧櫃2號"
                    break;
                }
              }else{
                vm.cntr_No = "櫃號: "+doc.data().cntr_No
              }
              vm.name = doc.data().name,
              vm.title = doc.data().title,
              vm.date = doc.data().date,
              vm.pg_No = doc.data().pg_No,
              vm.phone = doc.data().phone,
              vm.info = doc.data().info,
              vm.sms_info = doc.data().sms_info
            })
          })
        })
    },
    watch: {
      "$router": "fetchData"
    },
    methods: {
      fetchData(){
        db.collection("Mailroom").where("pg_No", "==", this.$route.params.pg_No)
          .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
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
              this.name = doc.data().name,
              this.title = doc.data().title,
              this.date = doc.data().date,
              this.pg_No = doc.data().pg_No,
              this.phone = doc.data().phone,
              this.info = doc.data().info,
              this.sms_info = doc.data().sms_info
            })
          })
      },
      deleteStu(){
        if(confirm ("確定刪除此人?")) {
          db.collection("Mailroom").where("pg_No", "==", this.$route.params.pg_No)
            .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/')
            })
          })
        }
      }
    }
  }
</script>

<style>

</style>
