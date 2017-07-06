// 함수 이름 명시하기
function add(a, b){
    return a+b;
};

var result_add = add(10, 10);
console.log("result = " + result_add);


// 변수에 함수를 대입하기
var multi = function(a, b){  
    return a*b;
}

var result_multi = multi(20, 20);
console.log("result = " + result_multi);

// 객체에 함수 선언, 접근 해보기
// 1. 객체에 변수와 함수를 선언
var person = {};
person.name = "Ted";
person['age'] = 28;
person.adder = function(a, b){
    return a*b;
}

// 2. 객체 구성요소에 접근
console.log("name : " + person.name + " age : " + person.age + " adder = " + person.adder(20,30));

// 객체 선언과 동시에 요소들 정의 하기
var property = {
    // 그냥 선언하면 var
    name : "ted",
    age : 28,
    
    // 함수를 선언하고 싶으면 function 키워드를 사용
    adder : function(a, b){
        return a+b;
    }
};

console.log("name : " + property.name + " age : " + property.age + " adder = " + property.adder(100,20));

