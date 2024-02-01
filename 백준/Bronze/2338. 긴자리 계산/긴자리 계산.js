const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const a = BigInt(input[0]);
const b = BigInt(input[1]);

let answer = a + b + "\n";
answer += a - b + "\n";
answer += a * b;
console.log(answer);
