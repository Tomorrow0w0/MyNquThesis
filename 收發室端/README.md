# NQUMailroom

[Demo網址](https://mailroom-ba90c.firebaseapp.com/)<br>
[PPT放置處(google雲端)](https://drive.google.com/open?id=1Rvk9dgfos2f8PxhMfsVZ6TpR5nDeFCbC)

-------------
| ppt標題  |  文字敘述             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
|  前言 |我觀察到學校收發室人員，彙整包裹名單的方式，乃處於紙筆及人工抄寫，<br>我希望透過物聯網的機制，創造一項工具，來解決人員的不便，既是我本次專題的發想。  |
|  系統設計及架構 | 本次專題開發我選用了vue.js作為網頁前端框架，<br>materialize作為網頁的響應式ui框架，<br>firbase作為網頁的後端資料庫。接下來將介紹它們有哪些優點?我為何採用?|
|  vue.js |  **1.** <br>相對於其他同類型的框架，簡單易學習，官網既有清晰的中文範例可參考。<br>**2.**<br>它提供一些便捷的指令與屬性，將數據與視圖雙向綁定，<br>能讓數據變化快速反射在視圖的更新上。<br>**3.**<br>靈活的組件化，能將一個頁面拆分成各個功能明確的區塊，<br>像積木一樣能自由拼裝及替換，達到易分工易維護的好處。<br>**4.**<br>配合webpack打包技術，最終項目生成，<br>只會有一個index.html和三個文件夾，分別放置js css image，<br>這樣的好處是能大幅降低代碼重複性的問題。 |
|  materialize |   使用上和 Bootstrap 是差不多的，但官網文件非常清楚簡潔，<br>大多數元件只要看範例就知道如何使用。|
|  firebase |  **1.**<br>快速建制後端服務，提供即時資料庫，<br>有效縮短專題開發時間，並讓我專注在前端的優化。<br>**2.**<br>firebase每新增一筆資料，既自動產生一組加密金鑰，<br>我將利用此金鑰來生成qrcode，作為學生端取貨的證明依據。<br>**3.**<br>firebase雲端架站，只需幾個簡單指令，<br>馬上能將網頁佈署到雲端主機，使我輕鬆架站。 |
|  系統簡介 |   系統主要有這4大方針<br>**1.**<br>協助人員快速建制包裹名單，並且能一鍵下載未取貨.pdf，放在學校官網供人參閱。<br>**2.**<br>系統會主動通知學生包裹已到收發室只要拿qrcode，就能快速取貨，不需排隊。<br>**3.**<br>操作介面，必須是直覺化，且單手就能夠使用的。<br>**4.**<br>希望打造智慧櫃，讓取貨時間，不侷限於收發室人員上下班時間。|
| 進度規劃  |  劃分成三階段進行<br>**1.**<br>主要宗旨為開發出協助收發室人員的工具，之後會持續進行功能的優化及維護。<br>**2.**<br>預期完成學生端，主要由學生主動提供包裹編碼等必要訊息，<br>以利匹配收發室資料庫，回傳其金鑰值，生成qrcode。<br>**3.**<br>利用樹莓派製作智慧櫃，完成硬體部分，並且與收發平台做結合，達成物聯網化的目標。 |
-------------
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
