// 예제1
// 외부 파일에서 변수 받아서 콘솔에 출력
// var myvar = require('./myvar');                                  
// console.log(myvar.a);


// 예제2
// myvar.js 에서 받은 모듈에서 a를 setA에 담아서 콘솔에 출력
// var myvar = require('./myvar');                                  
// var setA = myvar.a();
// console.log(setA);

// 예제3
// Myvar이라는 변수에 myvar.js경로를 요청해서 Myvar이라는 객체를 new 생성자를 통해 생성하고
// setVar 변수에 담는다
// 콘솔을 통해 setVar에 name 값을 찾고 내용이 없을시 Myvar 함수안에 내장변수인 name을 찾아서 출력
// var Myvar = require('./myvar');                                  
// var setVar = new Myvar();
// console.log(setVar.name);

// 예제4
// Car변수에 car.js파일을 요청해서 담는다
// Object.create 
var Car = require('./Car');                              
var myCar =  Object.create(Car.prototype);
// ??
Car.call(myCar);
myCar.log();


