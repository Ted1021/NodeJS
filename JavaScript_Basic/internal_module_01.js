// cpu 자원 체크
var os =require("os");

console.log("HostName : " + os.hostname());
console.log("memory : " + os.freemem());

// path 모듈 - File Descriptor 느낌이다.
// mkdir, ls 와 같은 역할을 한다.
var path = require("path");

// join : 배열 요소를 ',' 로 연결 해 준다.
var directories = ["Users", "tedkim", "Desktop", "Repository", "Study"];
var dirStr = directories.join();
console.log("dirStr : " + dirStr);

// join(path.sep) : 배열 요소를 'path.sep' 와 같은 특정 방식으로 연결한다.
var dirStr2 = directories.join(path.sep);
console.log("dirStr2 : " + dirStr2);

// 일반 join 은 배열 내의 요소를 모두 지정해 주어야 하므로 불편함.
// 따라서, path 모듈내에 정의 된 join 을 사용한다.
// path.join : 파일이 포함 된 경로를 보여준다.
var filePath = path.join("//Users/tedkim/Desktop/Repository/Study/NodeJS/JavaScript_Basic", "notepad.txt");
console.log("filePath : " + filePath);

// join 은 file 을 포함한 경로를, dirname 은 file 이 속해있는 경로(폴더 경로)를 보여준다.
// dirname : 파일이 속해있는 폴더 경로를 보여준다.
var dirName = path.dirname(filePath);
console.log("dirName : " + dirName);

// path.basename : 파일명 '만' 보여준다.
var baseName = path.basename(filePath);
console.log("baseName : " + baseName);


// path.extname : 파일의 확장자를 보여준다.
var extName = path.extname(filePath);
console.log("extName : " + extName);