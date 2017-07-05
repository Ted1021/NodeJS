// 변수의 선언
var name;
console.log("name : " + name );
// 값의 할당
name = "Ted";
console.log("name : " + name );

// 변수의 초기화
var age = 20;
console.log("age : " + age);

// 객체 생성하기
// 객체 선언은 중괄호로! {}, 중괄호 내에 속성을 정의!
// 속성에 접근 하는 것은 (객체).(속성명) 또는 (객체)["속성명"] 으로 접근 할 수 있다.
var person = {};
person['name'] = 'ted';
person['age'] = 28;

console.log('name : ' + person.name + ' / age : ' + person.age);

person.addr = "용인시 기흥구 보정동";
person.univ = "단국대학교";

console.log("addr : " + person["addr"] + " univ : " + person["univ"]);
