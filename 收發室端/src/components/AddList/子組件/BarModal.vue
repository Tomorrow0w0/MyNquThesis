<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-body">
            <div ref="quagga" class="barcode"/>
        </div>
        <div class="modal-footer">
            <a @click="close" class="waves-effect red btn">
              <i class="material-icons i-30">close</i>
            </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Quagga from 'quagga';

  export default {
    name: 'Modal',
    props: [
      'show',
    ],
    data(){
      return{

      }
    },
    mounted(){
      this.$nextTick(() => {
        Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream",
              target: this.$refs.quagga
            },
            locate: true,
            frequency: 10,
            decoder : {
              readers : ["code_128_reader"],
              debug: {
                drawBoundingBox: false
              }
            },
            locator: {
              halfSample: true,
              patchSize: "medium"
            },
            lastResult : null
          },
          () => this.start())
      })
    },
    methods: {
      close: function(){
        this.$emit('close');
      },
      start() {
        Quagga.onDetected(this.onDetected)
        Quagga.start()
      },
      onDetected(result) {
        var decode = result.codeResult.code;
        if (this.lastResult !== decode) {
          this.$emit("debar",decode);
          this.close();
        }
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
    width: 96%;
    height: 60%;
  }
  .modal-body {
    position: relative;
    padding: 0px;
    justify-content: center;
    height: 85%;
  }
  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: center;
    height: 15%;
  }
  .i-30{
    font-size: 30px;
  }
  .barcode {
    position: fixed;
    max-width: 30%;
    max-height: 25%;
  }
</style>
