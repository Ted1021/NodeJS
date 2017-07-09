// 단일 자료형 배열
var names = ['소녀시대', '걸스데이', '티아라'];

// 객체 배열
var users = [{name : 'girlsGeneration', age : 20}, {name : 'girlsDay', age : 21}];

// 이미 존재하는 배열에 요소 추가하기 (push)
users.push({name : 'tiara', age : 22});
console.log('num of names : ' + names.length + ' / num of users : ' + users.length);

// c style for 문
for(i=0; i<users.length; i++){
    console.log('user name : ' + users[i].name + ' / user age : ' + users[i].age);
}

// 함수 배열 작성
var function_arr = [];

// 함수 작성
var adder = function(a ,b){
    return a+b;
}

// 배열에 함수 삽입
function_arr.push(adder);
// 함수 요소 접근 방법
console.log(function_arr[0](10, 10));

// 배열 요소 삭제
delete users[1];
console.dir(users);

// javascript for 문 (forEach)
users.forEach(function(items, index){
    console.log(items.name);
});

var user2 = [{name:'girls generation', age:20}, {name:'girls day', age:21}];
user2.push({name:'tiara', age:23});
console.log('length of array_push : ' + user2.length);

var elem = user2.pop();
console.log('length of array_pop : ' + user2.length);

console.log('pop element');
console.dir(elem);

// 배열의 맨 앞쪽으로 ...
user2.unshift({name:'mamamoo', age:24});
console.dir(user2);

// 배열 원소의 삭제는 'delete' 를 사용하지 않는다!!!!!!
// 실제 원소 삭제를 원한다면, 'splice' 키워드를 사용해야 한다.
delete user2[1];
console.log('delete 사용했을 때');
console.dir(user2);

// splice 는 파라미터가 중요함.
// splice(index, numOfDelItems, {object});
// index = 원소의 위치
// numOfDelItems = (0:추가), (정수:삭제 하고싶은 개수);
// object = 삽입 하고자하는 객체

// 특정 item 삽입
user2.splice(1, 0, {name:'girls generations', age:21});
console.dir(user2);

// 특정 아이템 삭제
user2.splice(2, 1);
console.dir(user2);

