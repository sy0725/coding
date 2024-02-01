const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/);
const [n, ...arr] = input;

let subject = Number(n);
let score = arr;

// 오름 차순
let upScore = arr.sort((a, b) => b - a); // [ '80', '60', '40' ]
let result = [];

for (let i = 0; i < score.length; i++) {
  result.push((upScore[i] / upScore[0]) * 100);
}

let sum = result.reduce((acc, cur) => acc + cur);

let avg = sum / subject;

console.log(avg);
