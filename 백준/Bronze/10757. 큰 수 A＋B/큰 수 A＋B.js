const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = BigInt(input[0]);
let b = BigInt(input[1]);

let c = a + b;
console.log(String(c));
