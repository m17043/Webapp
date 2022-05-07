const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ユーザです");
});
    
router.get('/info', (req, res) => {
    res.send("ユーザ情報です");
});

//router.get("/:id", (req, res) => {
//    res.send(${req.params.id});
//});


const sqlite3 = require('sqlite3');

//データベースオブジェクトの取得
const db = new sqlite3.Database('memo_data.sqlite3');


router.get('/', function(req, res, next) {
    db.serialize(() => {
        //SQL文, memosテーブルから全てのレコードを取得する（* は全て）
        db.all("select * from memos", (err, rows) => {
            if (!err) {
                const data = {
                    title: 'To Do メモ 一覧表示',
                    content: rows //DataBaseから返された全レコードがrowsに配列で入ります
                }
                //viewファイルのmemo/indexにdataオブジェクトが渡されます
                //res.render(テンプレートファイル名, { 渡す値をオブジェクトで }) → テンプレートファイルを描画する
                res.render("views/index'", data);
            }
        })
    })
});

module.exports = router;