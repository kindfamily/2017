// express 모듈을 불러와라 요청
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');




//MongoDB 접속
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});

var connect = mongoose.connect(
    'mongodb://127.0.0.1:27017/fastcampus', 
    { useMongoClient: true });
autoIncrement.initialize(connect);


var admin = require('./routes/admin');
var app = express();

// 3000번 포트로 불러와라
var port = 3000;

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log(__dirname);

// 미들웨어 셋팅
// router에 요청이 있기전에 미리 캐치를 해서 get어저구 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 경로가 admin일때 admin에 모든것을 가져와라
// 접속할 주소를 만들어줌 localhost:3000/admin 이라고 접속하면 admin.js가 열림
app.use('/admin', admin);

// 요청
app.get('/', function(req,res){
    res.send('dheoelwlfash app');
    // json으로 보낼때는 sendjson
});

// 브라우저에 찍어줘라
app.listen( port, function(){
    console.log('Express listening on port', port);
});