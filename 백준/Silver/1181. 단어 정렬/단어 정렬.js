const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "example.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/);
const [n, ...words] = input;

Array.from(new Set(words))
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length)
  .forEach((i) => console.log(i));
