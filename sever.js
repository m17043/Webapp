const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

app.listen(PORT, () => console.log("サーバが起動しました"));

app.set("view engine", "ejs"); 

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sample.db');
//const db = new sqlite3.Database('money.db');


app.get("/",(req,res) => {
    db.serialize( () => {
        db.all("SELECT * FROM sample INNER JOIN money ON sample.価格 = money.価格 AND sample.日付 = money.日付;", (error, price) => {
            if(error){
                console.log('Error:', error);
                return;
            }
            console.log(price);
            res.render('index', {price:price});
        });
        
    });
});


/*
app.get("/",(req,res) => {
   
});



app.get("/", (req, res) => {
    const message = "Hello world";
    res.render('index', {mes:message});
});

app.get("/", (req,res)=> {
    console.log("hello express");
    res.send("こんちゃす");
})
*/   

