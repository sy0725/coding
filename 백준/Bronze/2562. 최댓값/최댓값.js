const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const nums = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);
let max = nums[0];
let count = 0;
for (let i = 1; i < 9; i++) {
  if (nums[i] > max) {
    max = nums[i];
    count = i;
  }
}
console.log(max);
console.log(count + 1);
