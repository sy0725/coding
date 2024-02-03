const { ChildProcess } = require("child_process");
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

let a = input.slice(1);

let b = a.sort((a, b) => a - b);

console.log(b.join("\n"));
