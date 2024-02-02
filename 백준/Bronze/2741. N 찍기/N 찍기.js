const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString();

let n = input;
let answer = "";

for (let i = 1; i <= n; i++) {
  answer += i + "\n";
}

console.log(answer);
