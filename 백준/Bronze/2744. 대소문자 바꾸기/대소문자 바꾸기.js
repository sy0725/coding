const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString().trim();

result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    result += input[i].toLowerCase();
  } else {
    result += input[i].toUpperCase();
  }
}

console.log(result);
