const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim();

// sort로 내림차순 만들기
// 그렇다면 먼저 string => array
// split() 로 쪼개기
let a = input.split("");

let b = a.sort((a, b) => b - a);

let c = b.join("");
console.log(c);
