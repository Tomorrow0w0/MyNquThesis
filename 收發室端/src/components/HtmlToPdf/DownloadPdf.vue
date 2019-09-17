<template>
  <div id="dow-pdf">
    <div id="pdfDom">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :paginate="true"
       />
    </div>

    <div class="fixed-action-btn click-to-toggle">
      <a class="btn-floating btn-large indigo darken-1">
        <i class="material-icons i-35">more_vert</i>
      </a>
      <ul>
        <li>
          <router-link to="/" class="btn-floating green darken-1">
            <i class="fa fa-address-book"></i>
          </router-link>
        </li>
        <li>
          <a @click="getPdf()" class="btn-floating red darken-1">
            <i class="fa fa-download"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import db from "../FirebaseLink/FirebaseInit"
  import firbase from 'firebase'

  export default {
    name: "dow-pdf",
    data(){
      return {
        htmlTitle: "未取貨", //pdf文件檔名
        columns: [
          {
            label: '日期',
            field: 'date',
          },
          {
            label: '姓名',
            field: 'name'
          },
          {
            label: '櫃號',
            field: 'cntr_No',
          },
          {
            label: '物流碼',
            field: 'pg_No',
          },
        ],
        rows:[ ]
      }
    },
    created: function(){
      db.collection("Mailroom").where("info","==","未取貨")
        .orderBy("date").get().then
      (querySnapshot => {
        querySnapshot.forEach(doc => {
          var neel = doc.data().name
          var exchange = neel.charAt(1);
          const data = {
            "name": neel.replace(exchange,"◎"),
            "date": doc.data().date.substring(5),
            "pg_No": doc.data().pg_No,
            "cntr_No": doc.data().cntr_No
          }
          this.rows.push(data)
        })
      })
    }
  }
</script>



<style scoped>

</style>
