// 載入 mongoose
const mongoose = require("mongoose")

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

// 設定連線到 mongoose (MONGODB_URI 設定在 .env 檔案)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線失敗
db.on("error", () => {
  console.log("MongoDB error!")
})
// 連線成功
db.once("open", () => {
  console.log("MongoDB connected!")
})

module.exports = db