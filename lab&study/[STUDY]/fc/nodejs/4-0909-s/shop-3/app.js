// express 모듈을 불러와라 요청
var express = require('express');

var admin = require('./routes/admin');

var app = express();
// 3000번 포트로 불러와라
var port = 3000;

// 경로가 admin일때 admin에 모든것을 가져와라
// 접속할 주소를 만들어줌 localhost:3000/admin 이라고 접속하면 admin.js가 열림
app.use('/admin', admin);

// 요청
app.get('/', function(req,res){
    res.send('dheoelwlfash app');
    // * json으로 보낼때는 sendjson
});

// 브라우저에 찍어줘라
app.listen( port, function(){
    console.log('Express listening on port', port);
});