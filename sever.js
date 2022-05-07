const express =  require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

//app.use(express.static("public"));
app.set("view engine", "ejs");

/*
app.get("/", (req, res) => {
    res.render("index", {text: "NodejsとExpress"})
});
*/

//ルーティング

app.listen(PORT, () => console.log("サーバが起動しますた"));

var userRouter = require('./routes/user');

app.use('/user', userRouter);