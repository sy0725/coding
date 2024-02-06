const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = input.sort((a, b) => b - a);

let b = a[1];

console.log(b);
