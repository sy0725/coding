const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = +input[0];
let b = +input[1];

let answer = (a + b) * (a - b);
console.log(answer);
