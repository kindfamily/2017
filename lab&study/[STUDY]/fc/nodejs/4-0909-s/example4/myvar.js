// 예제02
// var a = "hello";
// // module a를 내보내준다
// module.exports.a = a;


// // 예제 03
// // module a 함수를 내보내준다
// module.exports.a = function(){
//     return "Return function";
// };

// 예제 04
// *생성자를 이용해 출력
function Myvar(){
    this.name = "my Instance";
}
module.exports = Myvar;