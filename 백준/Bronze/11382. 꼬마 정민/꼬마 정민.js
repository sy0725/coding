const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log(a + b + c);
