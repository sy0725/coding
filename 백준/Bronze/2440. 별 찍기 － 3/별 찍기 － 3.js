const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");
const input = require("fs").readFileSync(filePath).toString().trim();
const N = Number(input);
let result = "";

for (let i = N; i > 0; i--) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
