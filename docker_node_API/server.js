const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message: "Hello World!"});
});

require("./app/routes/shop.routes.js")(app);
// 포트넘버 설정
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})