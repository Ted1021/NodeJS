// callback 함수의 return 값을 내부함수에서 사용하는 case : history
function add(a, b, callback){
    
    var result = a + b;
    callback(result); // callback 함수 호출
    
    // 내부 함수 정의
    var history = function(){
        return a + '+' + b + '=' + result;
    }
    return history;
    
}

var add_history = add(10, 10, function(result));