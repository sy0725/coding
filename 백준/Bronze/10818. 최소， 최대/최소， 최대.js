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

let a = Number(input[0]);
let nums = input[1].split(" ").map((x) => Number(x));

let max = nums[0];
let min = nums[0];

for (let i = 0; i < a; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log(min + " " + max);
