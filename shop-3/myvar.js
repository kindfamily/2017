// 예제1
// 변수에 내용 답아서 exports를 활용해서 모듈로 내보냄
// var a = "hello";
// module.exports.a = a;

// 예제2
// module.exports에 a라는 함수를 담아서 내보냄 
// module.exports.a = function(){
//     return "Return function";
// };

// 예제3
// name 이라는 내부 변수에 my instancd라는 내용을 담은 Myvar이라는 함수를
// module.exports담아 내보낸다
function Myvar(){
    this.name = "my Instance";
}
module.exports = Myvar;