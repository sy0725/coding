const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const a = Number(input[0]);

result = [];

for (let i = 1; i <= a; i++) {
  result.push(i);
}

let answer = result.reduce((acc, cur) => acc + cur);

console.log(answer);
