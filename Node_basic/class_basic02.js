// var 를 이용한 json 형태의 객체 선언과 class (funciton) 의 구성요서 선언과 접근의 차이점을 알아본다.

// 1. json 객체
// 1.1 json 객체의 구성요소 선언
var object = {};
object.name = "ted";
object['age'] = 28;

// 1.2 json 객체의 구성요소 접근
console.log(object.name + " / " + object.age);

// 2 class 만들기
// 2.1 class 선언
function myClass(){
    
    // 변수건 메소드건 this 키워드를 적용시켜 볼 것
    this.name = "ted";
    this.age = 28;
    
    this.myPrint = function(name, age){
        console.log(name + " / " + age);
    }
}

console.log("----------------------------\n");

// 2.2 class 접근
var newClass = new myClass();

console.log(newClass.name);
console.log(newClass.age);

newClass.myPrint(newClass.name, newClass.age);

// 2.3 prototype 키워드를 이용해 외부에서 변수, 메소드 추가하기
// 2.3.1 prototype 을 이용해 메소드 추가
myClass.prototype.adder = function(a, b){
    return a+b;
}
// 2.3.2 prototype 을 이용해 변수 추가
// 요건 어캐하지 ... ?
//myClass.prototype.newVal = 15;

// 2.3.2 prototype 을 이용해 생성한 요소들에 접근
var result = newClass.adder(10, 10);
console.log(result);
//console.log(newVal);





