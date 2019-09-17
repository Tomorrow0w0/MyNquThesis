<template>
  <div id="add-list">
    <h3>新增包裹</h3>
    <div class="row">
      <barmodal v-show="isModalVisible" @debar="bar_No" @close="closeModal"/>
    </div>
    <div class="row">
      <form @submit.prevent="saveList" class="col s12">
        <div class="row">
          <div class="input-field col s10">
            <input v-model="pg_No" placeholder="包裹號碼: " type="text" required>
          </div>
          <div class="input-field col s2">
            <a class="btn btn-small" @click="showModal">
              <i class="fa fa-barcode i-30" aria-hidden="true">
              </i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>姓名 :</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select id="titleSelect">
              <option value="" disabled selected>請選擇...</option>
              <option value="學生">學生</option>
              <option value="老師">老師</option>
            </select>
            <label>職稱 :</label>
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
            <label>手機 :</label>
          </div>
        </div>
        <div class="row">
          <div class="switch col s12">
            <label>
              櫃號
              <input type="checkbox" id="switchVal">
              <span class="lever"></span>
              智慧櫃編號
            </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <div v-if="isShow">
              <input type="text" v-model="cntr_No" required>
              <label>櫃號 :</label>
            </div>
            <div v-else>
              <input type="text" v-model="smart_No" required>
              <label>智慧櫃編號 :</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select id="infoSelect">
              <option value="" disabled selected>請選擇...</option>
              <option value="未取貨">未取貨</option>
              <option value="已取貨">已取貨</option>
            </select>
            <label>狀態 :</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="sms_info">
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
  import BarModal from './子組件/BarModal'

  export default {
    name: "add-list",
    components:{
      'barmodal': BarModal
    },
    data(){
      return {
        isModalVisible: false,
        "name": null,
        "title": null,
        "date": null,
        "pg_No": null,
        "phone": null,
        "cntr_No": null,
        "info": null,
        "sms_info": "SMS未發送",
        isShow: true,
        "smart_No": null,
        "gpio_No": null
      }
    },
    mounted(){
      var _this = this
      $('select').material_select();
      $('#titleSelect').change(function(){
        _this.title = $(this).val()
        //console.log("change: " + _this.title)
      });
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
      $('.datepicker').change(function(){
        _this.date = $(this).val()
        //console.log("change: " + _this.date)
      });
      $('#infoSelect').change(function () {
        _this.info = $(this).val()
        //console.log("change: " + _this.info)
      });
      $('#switchVal').change(function() {
        if($(this).is(":checked")) {
          _this.isShow = false
        }else{
          _this.isShow = true
        }
      });
    },
    methods: {
      saveList: function(){
        switch(this.smart_No)
        {
          case "1":
            this.gpio_No = 4
            break;
          case "2":
            this.gpio_No = 18
            break;
          default:
            this.gpio_No = null
        }

        db.collection("Mailroom").add({
          "name": this.name,
          "title": this.title,
          "date": this.date,
          "pg_No": this.pg_No,
          "phone": this.phone,
          "cntr_No": this.cntr_No,
          "info": this.info,
          "sms_info": this.sms_info,
          "gpio_No": this.gpio_No
        })
          .then(docRef => this.$router.push("/"))
          .catch(error => console.log(error))
      },
      showModal: function(){
        this.isModalVisible = true
      },
      closeModal: function(){
        this.isModalVisible = false
      },
      bar_No: function(No){
        this.pg_No = No
      }
    }
  };
</script>

<style scoped>
  .btn-small {
    width: 45px;
    height: 35px;
    padding: 0px;
  }
  .i-30{
    font-size: 30px;
  }
</style>
