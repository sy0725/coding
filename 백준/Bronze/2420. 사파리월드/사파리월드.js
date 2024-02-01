const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let answer = Math.abs(N - M);

console.log(answer);
