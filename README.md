# URL Shortener 短網址產生器

![image](./public/image/image_01.png)
![image](./public/image/image_02.png)

## 介紹

運用 Express & MongoDB 打造的網頁，進行短網址生成。

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，建立 .env 文件，連線至你的 MongoDB
   
   ```bash
   MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority

   ```

5. 連線完畢後，繼續輸入：

   ```bash
   npm run start
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.3
- MongoDB
- mongoose 6.0.5
