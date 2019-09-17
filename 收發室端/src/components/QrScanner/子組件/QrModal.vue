<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header">
            <h3>{{ Name }}</h3><h3>{{ Title }}</h3>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <h4>櫃號:</h4><br>
            <h4>{{ cntrNo }}</h4>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <a @click="close" class="waves-effect  grey darken-2 btn">取消</a>
            <a @click="status" class="waves-effect btn">取貨</a>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import db from "../../FirebaseLink/FirebaseInit"

  export default {
    props: [
      'show',
      'Key',
      'Name',
      'Title',
      'cntrNo'
    ],
    data(){
      return{

      }
    },
    methods: {
      status: function(){
        db.collection('Mailroom').doc(this.Key)
          .update({
            "info": "已取貨"
        }).then(() => {
          this.$router.push('/');
        })
      },
      close: function(){
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>
  .modal-fade-enter, .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: #fff;
    box-shadow: 2px 2px 22px 1px;
    overflow-x:auto;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 45%;
  }
  .modal-header, .modal-footer {
    padding: 0;
    display: flex;
  }
  .modal-header {
    border-bottom: 1px solid #eee;
    color: #4aae9b;
    justify-content: flex-start;
    height: 20%;
  }
  .modal-body {
    position: relative;
    padding: 20px;
    justify-content: center;
    height: 60%;
  }
  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: space-around;
    height: 20%;
  }
</style>
