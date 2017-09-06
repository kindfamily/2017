var userChoice = prompt("가위, 바위, 보자기 중 무엇을 선택하시겠습니까?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "바위";
} else if(computerChoice <= 0.67) {
    computerChoice = "보자기";
} else {
    computerChoice = "가위";
}

var compare = function (choice1, choice2){
    if(choice1 === choice2){
        return "결과는 무승부!";
    }
    
    if(choice1 === "보자기"){
        if(choice2 === "가위"){
             return "가위승";
        }else{
            return "보자기승";
        }
    }
    
    if(choice1 === "가위"){
        if(choice2 === "바위"){
             return "바위승";
        }else{
            return "가위승";
        }
    }
    
    if(choice1 === "바위"){
        if(choice2 === "보자기"){
             return "보자기승";
        }else{
            return "바위승";
        }
    }    
}

console.log(compare(userChoice ,computerChoice));


