const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [a, b] = input.map((e) => [...e].reverse().join(""));

console.log(a > b ? a : b);
