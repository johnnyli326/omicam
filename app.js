// 取得node_module的express
const express = require('express');
// 宣告一個變數app，指向express的所有屬性
const app = express();
// 將網址連到首頁
app.get('/', (req, res) => {
  // res.send('1234');
  // 可傳送html標籤
  res.send('<html><head></head><body><h1>首頁</h1></body></html>');
});
app.get('/user', (req, res) => {
  res.send('user頁面');
});
// 監聽port，伺服器的序列埠 或 3000號
const port = process.env.PORT || 3000;
app.listen(port);
