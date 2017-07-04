console.log("argv 파라미터 수 : " + process.argv.length);

// 명령 수행에 있어 두개의 파라미터가 사용 된 것을 알 수 있었다.
console.dir(process.argv);

// forEach 함수 : 특정 객체의 구성요소 하나하나를 순차적으로 가져온다.
// function : 익명 함수
// item, index : 배열의 값과 인덱스
// 익명함수라니!?
process.argv.forEach(function(item, index){
    console.log(index + " : " + item);
});

