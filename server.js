//npm init
//npm i express
//ps aux|grep node
//kill -9 1659

const express = require("express");
const bodyParser = require("body-parse");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
})

app.post("/", function(req, res){
    let num1 = Number(req.body.number1);
    let num2 = Number(req.body.number2);


    let result = num1 + num2;
    res.send(`Your result is ${result}`);
    console.log(num1);
    console.log(num2);
})

app.get("/contact", function(req, res){
    res.send("vlad.voloshko1998@gmail.com");
})

app.listen(8800, function(){
    console.log("Server is running on Port 4000.");
})