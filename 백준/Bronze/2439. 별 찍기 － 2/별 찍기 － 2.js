const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

let n = "";
let m = "";

for (let i = 1; i <= input; i++) {
  n += "*";
  for (let j = 0; j < input - i; j++) {
    m += " ";
  }
  console.log(m + n);
  m = "";
}
