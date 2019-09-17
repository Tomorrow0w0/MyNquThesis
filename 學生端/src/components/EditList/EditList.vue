<template>
  <div id="edit-list">
    <h3>編輯包裹訊息</h3>
    <div class="row">
      <form @submit.prevent="updateList" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="pg_No">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="title" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="date" placeholder="日期: " type="date" class="datepicker">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="phone" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="cntr_No" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="info" required>
          </div>
        </div>
        <button type="submit" class="btn">提交</button>
        <router-link to="/" class="btn grey">取消</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import db from "../FirebaseLink/FirebaseInit"
  export default {
    name: "edit-list",
    data(){
      return{
        "name": null,
        "title": null,
        "date": null,
        "pg_No": null,
        "phone": null,
        "cntr_No": null,
        "info": null,
        test: ['one', 'two', 'three']
      }
    },
    mounted(){
      var _this = this
      $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'yyyy/mm/dd',
        weekdaysLetter: ['日', '一', '二', '三', '四', '五', '六'],
        today: '今天',
        clear: '清除',
        close: '關閉',
        monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdaysShort: ['週日', '週一', '週二', '週三', '週四', '週五', '週六']
      });
    },
    beforeRouteEnter(to, from, next){
      db.collection("Mailroom").where("pg_No", "==", to.params.pg_No).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.name = doc.data().name,
                vm.title = doc.data().title,
                vm.date = doc.data().date,
                vm.pg_No = doc.data().pg_No,
                vm.phone = doc.data().phone,
                vm.cntr_No = doc.data().cntr_No,
                vm.info = doc.data().info
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
            this.name = doc.data().name,
            this.title = doc.data().title,
            this.date = doc.data().date,
            this.pg_No = doc.data().pg_No,
            this.phone = doc.data().phone,
            this.cntr_No = doc.data().cntr_No,
            this.info = doc.data().info
          })
        })
      },
      updateList(){
        db.collection("Mailroom").where("pg_No", "==", this.$route.params.pg_No)
          .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              "name": this.name,
              "title": this.title,
              "date": this.date,
              "pg_No": this.pg_No,
              "phone": this.phone,
              "cntr_No": this.cntr_No,
              "info": this.info
            })
            .then(() => {
              this.$router.push({name:'view-list',
              params:{pg_No: this.pg_No}})
            })
          })
        })
      }
    }
  }
</script>

<style>

</style>
