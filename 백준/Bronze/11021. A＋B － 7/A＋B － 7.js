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

for (let i = 1; i < input.length; i++) {
  let numbers = input[i].split(" ").map((v) => v * 1);
  console.log(`Case #${i}: ${numbers[0] + numbers[1]}`);
}
