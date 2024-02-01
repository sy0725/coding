const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0]) ** 2;
let b = Number(input[1]) ** 2;
let c = Number(input[2]) ** 2;
let d = Number(input[3]) ** 2;
let e = Number(input[4]) ** 2;

let answer = (a + b + c + d + e) % 10;

console.log(answer);
