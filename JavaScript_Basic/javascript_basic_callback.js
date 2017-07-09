// 콜백 함수의 정의
function add(a, b, callback){
    
    var result = a+b;
    callback(result);
}

// 콜백 함수의 응용
add(10, 10, function(check_result){
    console.log('check_callback function result in callback function: ' + check_result);
});

