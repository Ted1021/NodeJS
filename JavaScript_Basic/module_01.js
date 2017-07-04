// Implement Adder

// calc object 생성
var calc = {};
// add 속성 정의
calc.add = function(a, b){
    return a+b;
};
// char 속성 정의
calc.name = "ted";

console.log(calc.name + " 모듈로 분리하기 전 상태 : " + calc.add(1, 6));

module.exports = calc.add;

