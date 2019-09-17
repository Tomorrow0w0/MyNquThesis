<template>
  <v-app id="OnlyPage">
    <section id="part1">
        <v-parallax
          src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg1.jpg?alt=media&token=e4a012e7-3b3f-4cc3-9e89-950cffbdf84b"
          height="600"
        >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <article xs12 md8 class="blur_box">
              <div class="rgba"></div>
              <div class="content_text">
                <p class="ftsize36">前言</p>
                <p class="ftsize20">
                  本團隊觀察到學校收發室，<br>
                  每天都有成堆的包裹等著處理，<br>
                  各位是否有留意過?<br>
                  收發室總與我們息息相關，<br>
                  特別對身居離島大學的我們來說，<br>
                  更是一個重要的對外物資窗口。<br>
                </p>
              </div>
            </article>
          </v-layout>
        </v-parallax>

        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <p class="ftsize36">
                聚焦問題 提出解決方案
              </p>
              <p class="ftsize20">
                目前學校收發室人員彙整包裹的方式，乃處於紙筆及人工抄寫，<br>
                我們希望透過物聯網的機制，創造一個系統並結合QRcode，<br>
                讓包裹的收取增加安全性的同時，也減少人力資源的浪費。
              </p>
            </div>
          </v-flex>
        </v-layout>
    </section>

    <section id="part2">
      <v-parallax
        src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg2.jpg?alt=media&token=9daf7e9b-7563-4aa8-bda3-ab82b10d706e"
        height="600">
        <v-layout
          column
          align-center
          justify-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center" height="180">
              <p class="ftsize36">
                系統核心設計
              </p>
            </div>

                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/Vlogo.png?alt=media&token=611c32c7-28e9-468a-a2b4-149f8a46cb90"
                            height="180"/>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/Mlogo.png?alt=media&token=4dc464cd-1e5c-44db-9bcc-e0e24079d1a0"
                            height="180"/>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/Flogo.png?alt=media&token=6044676a-2294-4ab4-be9c-9b3218d8084e"
                            height="180"/>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>

            <div class="text-xs-center" height="180">
              <p class="ftsize28">
                本次系統開發選用 :
              </p>
              <p class="ftsize24">
                Vue.js 作為網頁前端框架，<br>
                Materialize 作為網頁的響應式 UI 框架，<br>
                Firbase 作為網頁的後端資料庫。
              </p>
            </div>

          </v-flex>
        </v-layout>
      </v-parallax>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <p class="ftsize36">
              它們有哪些優點? 我們為何採用?
            </p>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout
              row
              align-start
            >
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Vue.js
                    </div>
                  </v-card-title>
                  <v-card-text>
                    1. 簡單易學習，官網既有清晰的中文範例可參考。<br>
                    2. 便捷的指令，讓數據變化快速反射在視圖的更新。
                    3. 將單頁面組件化，可達到易分工易維護的好處。<br>
                    4. 配合webpack打包技術，能大幅降低代碼重複性。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Materialize
                    </div>
                  </v-card-title>
                  <v-card-text>
                    1. 官網文件清楚簡潔，只要看範例就知道如何使用。<br>
                    2. 專為移動端設備設計排版。<br>
                    3. 元件元素豐富，色彩多樣。
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Firbase
                    </div>
                  </v-card-title>
                  <v-card-text>
                    1. 快速建制後端服務，提供即時資料庫。<br>
                    2. Firebase每新增一筆資料，既自動產生加密金鑰，<br>
                    &emsp;利用此金鑰來生成QRcode，作為取貨的證明依據。<br>
                    3. 提供雲端主機，只需幾個簡單指令就能輕鬆架站。
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section id="part3">
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg5.jpg?alt=media&token=d87e8222-0fd3-4b9b-ae33-76139a800859"
        height="600">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg3-title.png?alt=media&token=15a94cf9-c29a-40f8-94d4-a1125b50c4d6"
          height="600"
        >
          <br>
          <br>
          <br>

          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-img>
      </v-img>

      <v-container grid-list-xl>
        <v-layout
                  column
                  wrap
                  justify-center
        >
            <br>
            <br>
            <br>
            <p class="text-xs-center ftsize36">
              系統取貨機制
            </p>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg4.png?alt=media&token=ce94e58f-9d5b-49d5-99e6-335f92bf98a6"
              height="600"
            >
            </v-img>
        </v-layout>
      </v-container>
    </section>

    <section id="part4">
      <v-container grid-list-xl>
        <p class="text-xs-center ftsize36">
          實機展示
        </p>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">收發室端</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/0-Pii1WiSsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">學生端</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/dzHiUalNzu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">取貨機制</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/TCZT3uZrR8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">一鍵下載</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/AdiUJplLQvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">註冊 登出 登入</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/lJ_OiH0kC-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">新增</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/8KkJ4gx1gd8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">搜尋 編輯 刪除</div>
              </v-card-title>
              <v-card-text>
                <iframe src="https://www.youtube.com/embed/hoMF1gvczrU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      </v-container>
    </section>
    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
           2018 Made with 國立金門大學 110410545 資工四 周明萱,
            聯絡方式 :
            <a class="white--text" href="https://line.me/ti/p/Xg90MWR-9P" target="_blank">Line</a>
            <a class="white--text" href="https://www.facebook.com/profile.php?id=100003881704499" target="_blank">FB</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "OnlyPage",
    data(){
      return{
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg3-1.png?alt=media&token=b9ef1de5-0dec-4bb1-9153-9084e54f8805'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg3-2.png?alt=media&token=7dc1beb4-0f50-4845-b3b5-df39e81822fb'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg3-3.png?alt=media&token=919abfc1-050c-49fe-bb8e-ab19bb736a8a'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg3-4.png?alt=media&token=dbf521ca-720c-4b53-a955-6518e0e77eec'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .ftsize36{
    font-size: 36px;
  }

  .ftsize28{
    font-size: 28px;
  }

  .ftsize24{
    font-size: 24px;
  }

  .ftsize20{
    font-size: 20px;
  }

  .ftsize18{
    font-size: 18px;
  }

  .blur_box{
    z-index: 0;/* 为不影响内容显示必须为最高层 */
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }

  .blur_box:before{
    content: "";
    position: absolute;
    width:300%;/* 模糊层的宽度和高度都变大 */
    height:300%;
    left: -100%;/* 回调模糊层位置 */
    top: -100%;
    background:url(https://firebasestorage.googleapis.com/v0/b/finalprojectprofile.appspot.com/o/bg1.jpg?alt=media&token=e4a012e7-3b3f-4cc3-9e89-950cffbdf84b) no-repeat center center fixed;
    filter: blur(20px);
    z-index: -2;
    border-radius: 20px;
  }

  .rgba{
    background-color: rgba(0, 0, 0, 0.2);/* 为文字更好显示，将背景颜色加深 */
    position: absolute;/* 固定半透明色层位置 */
    width:100%;
    height:100%;
    z-index: -1;/* 中间是rgba半透明色层 */
    border-radius: 20px;
  }

  .content_text{
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    padding: 50px 30px;
    line-height: 28px;
  }

  article{
    height:50%;
    margin:120px auto;
    border-radius:20px;
  }
</style>
