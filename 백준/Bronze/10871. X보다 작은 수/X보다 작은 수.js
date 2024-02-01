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

let max = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map((x) => Number(x));

const answer = arr.filter((v) => max > v);

console.log(answer.join(" "));
