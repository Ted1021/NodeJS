var adder = require("./module_01");

console.log("모듈로 분리 한 뒤의 값 : " + adder(10,10));

// 시스템 환경 변수 가져오기
var nconf = require("nconf");
var os = nconf.get("OS");
console.log("OS 환경변수의 값 : " + os);
