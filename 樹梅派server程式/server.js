// 導入koa
const Koa = require('koa');
const router = require('koa-router')()
const koaStatic = require('koa-static')
const app = module.exports = new Koa();
app.use(router.routes())
app.use(koaStatic('./Public', {index:'index.html'}))

// 連結firestore
const admin = require('firebase-admin');
const serviceAccount = require('./DBkey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://stumanager-a4e0e.firebaseio.com'
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

// 導入控制樹梅派GPIO
const Gpio = require('onoff').Gpio;

// 接收請求
router.get('/qrkey', async(ctx, next) => {
    // 印出URL後面的字串 console.log(ctx.request.querystring)
    
        // 查詢出對應的led_No
        db.collection('Mailroom').doc(ctx.request.querystring)
          .get().then(doc => {
          if (!doc.exists) {
            console.log('無結果');
          } else {
            console.log('GPIO號碼:', doc.data().gpio_No); 
             
            startLED(doc.data().gpio_No);
          }
        })
        .catch(err => {
          console.log('Error', err);
        });
})

function startLED(number) { 
    // Gpio 通電 
    const LED = new Gpio(number, 'out');
    LED.writeSync(1); // Turn LED on
    // 5秒後關閉
    setTimeout(() => LED.writeSync(0), 5000);
}

// 以下是簡訊發送程式
// 三竹api init && http請求 
require('dotenv').config();
const Request = require('request');
const querystring = require('querystring');
const HTTPS_HOST = `https://smexpress.mitake.com.tw:9601`;
const HTTP_HOST = `http://smexpress.mitake.com.tw:9600`;

const GetAPI = (host) => {
    return new Promise((resolve, reject) => {
        Request.get(host, (error, response, body) => {
            if (error) reject(error);
            else resolve(body);
        });
    });
}

class MitakeModule {
    constructor(username, password) {
        this.username = "0422782805";
        this.password = "Nqu110410545";
    }

    async getStatus(id) {
        let self = this;
        const username = self.username;
        const password = self.password;
        if (!username) {
            return Promise.reject('no username');
        }
        if (!password) {
            return Promise.reject('no password');
        }
        const api = `${HTTP_HOST}/SmQueryGet.asp?username=${username}&password=${password}$msgid=${id}`;
        const result = await GetAPI(api).catch(err => Promise.reject(err));
        return Promise.resolve(result);
    }

    async sendMessage(phone, text) {
        let self = this;
        const username = self.username;
        const password = self.password;
        if (!username) {
            return Promise.reject('no username');
        }
        if (!password) {
            return Promise.reject('no password');
        }
        const msg = querystring.escape(text);
        const api = `${HTTP_HOST}/SmSendGet.asp?username=${username}&password=${password}&dstaddr=${phone}&smbody=${msg}&encoding=UTF8`;
        const result = await GetAPI(api).catch(err => Promise.reject(err));
        return Promise.resolve(result);
    }

    async getAccountPoint() {
        let self = this;
        const username = self.username;
        const password = self.password;
        if (!username) {
            return Promise.reject('no username');
        }
        if (!password) {
            return Promise.reject('no password');
        }
        const api = `${HTTP_HOST}/SmQueryGet.asp?username=${username}&password=${password}`;
        const result = await GetAPI(api).catch(err => Promise.reject(err));
        return Promise.resolve(result);
    }
}

const username = process.env.MITAKE_USR;
const password = process.env.MITAKE_PWD;
const mitake = new MitakeModule(username, password);

var ph
let countryCode = "+886"
var country_ph

db.collection("Mailroom")
  .onSnapshot(function(doc) {
      db.collection('Mailroom').where("sms_info", "==", "SMS未發送")
        .get().then(snapshot => {
          snapshot.forEach(doc => {
              ph = doc.data().phone
              country_ph = countryCode + ph.substring(1)
              IfInAuthList(country_ph,doc.data().pg_No)
          });
      })
      .catch(err => {
          console.log('Error getting documents', err);
      })
 })

function IfInAuthList(ph_val,pg_val){
   admin.auth().getUserByPhoneNumber(ph_val)
         .then(function(userRecord) {
             GetPackageInfo(userRecord.phoneNumber,pg_val)
          })
          .catch(function(error) {
                //console.log("Error fetching user data:", error);
           }); 
}

function GetPackageInfo(ph_val,pg_val){
    db.collection("students").doc(ph_val).collection("package")
       .where("pg_No", "==", pg_val)
      .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
               SendSMS(ph_val,doc.data().pg_No,doc.data().contents)             
          })
      })
}


function SendSMS(ph_val,pg_val,co_val){
    
     db.collection("Mailroom").where("pg_No", "==", pg_val)
          .get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              "sms_info": "SMS已發送"
            })
            .then(() => {
                var push_ph = "0"+ph_val.substring(4)
                var SMStext
                
                if(doc.data().gpio_No != null){
                    SMStext = "您的物品: "+co_val+"，已到智慧櫃了!"
                }else{
                    SMStext = "您的物品: "+co_val+"，已到NQU收發室了!"
                }
                
                mitake.sendMessage(push_ph, SMStext).then(val => {
                    console.log(val);
                    console.log("已向"+push_ph+"發送SMS");
                    console.log(SMStext);
                }).catch(err => {
                    console.log(err);
                });
            })
          })
        })
}

// 設定server位址
if (!module.parent){
    app.listen(3000)
    console.log("由此進入: http://localhost:3000")
} 