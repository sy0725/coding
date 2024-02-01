const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs").readFileSync(filePath).toString();

let N = Number(input);

for (i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
