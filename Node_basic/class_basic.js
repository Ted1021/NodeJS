
// class 는 function 으로 구성하고 내부의 속성과 메소드들은 'this' 키워드를 통해 선언한다.
function test_class(msg){
    
    // this 키워들를 이용해 속성들 선언
    this.name = "ted";
    this.messege_origin = msg;
    
    // this 키워드를 통해 선언하지 않으면
    // new 를 통해 클래스를 생성했을때,
    // undefined 로 할당 되게 됨.
    var test_messege = "messeege2";
    
    // 메소드 또한 this 키워드로 선언
    this.printOut = function(){
        // 여기선 왜 this 키워드를 선언하지않은 변수가 가져와 지는지 모르겠다...
        console.log("test messege was " + test_messege);
    }
}

// class 외부에서 함수, 변수 추가해 보기
// function 외부에서 변수 추가하기
test_class['newValue'] = "new property is added";

// function 외부에서 메소드 추가하기
test_class.prototype.printNewVal = function(){
    console.log(this.newValue);
}

// 일반적인 java 의 클래스 생성과 같이 'new' 키워드를 통해 새로운 객체를 생성 할 수 있다.
var new_class = new test_class("this is first messege");

// 생성한 객체 내부의 component 들은 '.' 을 이용해 접근 가능하다.
console.log(new_class.name);
console.log(new_class.messege_origin);
console.log(new_class.test_messege);

// 함수도 마찬가지로 '.' 을 이용해 접근!
new_class.printOut();

// 외부에서 class 내의 속성값 직접 변경
new_class.name = "Alice";
console.log(new_class.name);



