<template>
  <div id="qrscanner">
    <qrdecod @init="onInit" @decode="onDecode">
      <qrmodal :Key="qr_Key" :Name="qr_Name" :Title="qr_Title" :cntrNo="qr_cntrNo" v-show="isModalVisible" @close="closeModal"/>
      <router-link to="/" class="btn-floating btn-large waves-effect waves-light red center-btm">
        <i class="material-icons">close</i>
      </router-link>
    </qrdecod>
  </div>
</template>

<script>
  import db from "../FirebaseLink/FirebaseInit"
  import QrDecod from './子組件/QrDecod'
  import QrModal from './子組件/QrModal'

  export default {
    name: "qrscanner",
    components:{
      'qrdecod': QrDecod,
      'qrmodal': QrModal
    },
    data(){
      return {
        isModalVisible: false,
        qr_Key: null,
        qr_Name: null,
        qr_Title: null,
        qr_cntrNo: null
      }
    },
    methods: {
      async onInit (promise) {
        // show loading indicator
        try {
          await promise
          // successfully initialized
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            // user denied camera access permisson
          } else if (error.name === 'NotFoundError') {
            // no suitable camera device installed
          } else if (error.name === 'NotSupportedError') {
            // page is not served over HTTPS (or localhost)
          } else if (error.name === 'NotReadableError') {
            // maybe camera is already in use
          } else if (error.name === 'OverconstrainedError') {
            // passed constraints don't match any camera. Did you requested the front camera although there is none?
          } else {
            // browser is probably lacking features (WebRTC, Canvas)
          }
        } finally {
          // hide loading indicator
        }
      },
      onDecode(qr_key){
        var _this = this;
        _this.qr_Key = qr_key;
        db.collection('Mailroom').doc(qr_key)
          .get().then(function(Snapshot){
          _this.qr_Name = Snapshot.data().name;
          _this.qr_Title = Snapshot.data().title;
          _this.qr_cntrNo = Snapshot.data().cntr_No;
          _this.showModal();
        })
      },
      showModal: function(){
        this.isModalVisible = true
      },
      closeModal: function(){
        this.isModalVisible = false
      }
    }
  }

</script>

<style scoped>
  .center-btm{
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
</style>
