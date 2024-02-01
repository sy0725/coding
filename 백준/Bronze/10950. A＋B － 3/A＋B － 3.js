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

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
