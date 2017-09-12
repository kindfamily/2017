// 예제4
// Car 라는 함수를 정의하고 함수를 통해서는 사용이 가능한 this 변수를 통해 
// Red의 값을 color에 담는다
// log의 prototype이 Car함수를 바라보게하고 익명함수를 생성해서 Car함수에 있는
// this.color 값을 불러와 콘솔에 입력하는 함수를 생성
// Car함수를 내보낸다
function Car(){
    this.color = "Red ";
}
Car.prototype.log = function () {
    console.log( "this Car is "+this.color );
}
module.exports = Car;

// [ 질문 ] Car의 함수를 외부로 내보내면 선언한 프로토타입도 함께 딸려 가는건가요? 
