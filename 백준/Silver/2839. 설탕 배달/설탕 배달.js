const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");
const input = require("fs").readFileSync(filePath).toString().trim();

let a = Number(input);
let answer = 0;

while (true) {
  if (a % 5 === 0) {
    answer += a / 5;
    break;
  }

  a -= 3;
  answer += 1;

  if (a < 0) {
    answer = -1;
    break;
  }
}

console.log(answer);
