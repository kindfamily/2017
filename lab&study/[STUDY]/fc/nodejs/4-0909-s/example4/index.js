// 예제01
// // 내장 모듈 http를 불러움
// var http = require('http');
// // 익명함수 실행
// http.createServer(function(request, response){
//     // 상태코드를 200으로 보내줘라
//     response.writeHead(200, {'Content-Type' : 'text/plain'});
//     response.write('Hello Nodejs');
//     response.end();
// }).listen(3000);
// // listen은 포트 번호 


// // 예제02
// var myvar = require('./myvar');                                  
// console.log(myvar.a);


// // 예제 03
// var myvar = require('./myvar');                                  
// var setA = myvar.a();
// console.log(setA);

// 예제 04
// *생성자를 활용해서 출력
var Myvar = require('./myvar');                                  
var setVar = new Myvar();
console.log(setVar.name);
