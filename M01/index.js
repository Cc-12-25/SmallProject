var express = require('express')
var app = express()

var mysql = require('mysql')

var xa = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "ohanna"
})
xa.connect(function(bb){
    if (bb) {
        console.log('資料庫不開心',bb);
        return;
    }else{
        console.log('連線資料庫成功!');
        
    }
})

app.get('/:sid/:eid', function(req, res){
    xa.query('select pname,price from product where hid between ? and ?',[req.params.sid, req.params.eid],
        function(err,rows){
            if (err) {
                console.log('沒抓到資料'+JSON.stringify(err));
                return;
            } else{
                res.send("資料來了"+JSON.stringify(rows))
            }
        }
    );
})

app.listen(3000,function(){
    console.log('跑起來');
    
})