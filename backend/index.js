const express = require("express");
const app = express();

// 静的ページを公開できる
app.use(express.static("../frontend"));

// API
app.get("/v1/list", (req, res) => res.send(["dddd", "kkkk"]));

// サーバーを立てる
app.listen("3000", () => console.log("listen server 3000"));
