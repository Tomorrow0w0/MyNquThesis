<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4 z-depth-6 card-panel blue-grey lighten-2">
        <div class="login card-panel black-text center">
          <i class="fa fa-mobile" style="font-size:65px;color:#64b5f6;"></i>
          <form>
            <div class="input-field">
              <input type="number" v-model="phNo" placeholder="手機號碼"/>
            </div>
            <div class="row">
              <div class="input-field col s9">
                <input type="number" v-model="otp" placeholder="認證簡訊碼"/>
              </div>
              <div class="input-field col s3">
                <button class="btn btn-small" @click="sendOtp">
                  <i class="large material-icons">sms</i>
                </button>
              </div>
            </div>
            <div class="input-field">
              <button @click="verifyOtp" class="btn red accent-3 white-text">驗證</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="recaptcha-container"></div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: "phonesignup",
    data(){
      return{
        phNo: "",
        appVerifier : "",
        otp : ""
      }
    },
    methods :{
      sendOtp(){
        if(this.phNo.length != 10){
          alert("手機號碼格式錯誤!");
        }else{
          //
          let countryCode = '+886' //國碼
          let phoneNumber = countryCode + this.phNo
          //
          let appVerifier = this.appVerifier
          //
          firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              //
              alert("簡訊發送!")
            }).catch(function (error) {
            // Error; SMS not sent
            alert("錯誤!簡訊未發送!")
          });
        }
      },
      //
      verifyOtp(){
        var _this = this
        if(this.phNo.length != 10 || this.otp.length != 6){
          alert("電話號碼/ OTP格式無效!");
        }else{

          let code = this.otp
          //
          window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            //route to set password !
            _this.$router.push('/phonesetpassword')
          }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
          });
        }
      },
      initReCaptcha(){
        setTimeout(()=>{
          window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            },
            'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
            }
          });
          //
          this.appVerifier =  window.recaptchaVerifier
        },2000)
      }
    },
    created(){
      this.initReCaptcha()
    }
  }
</script>

<style scoped>
  .btn-small {
    width: 45px;
    height: 35px;
    padding: 0px;
  }
</style>
