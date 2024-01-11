const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = input[0];
const B = input[1];

const one = B % 10;
const ten = Math.floor((B % 100) / 10);
const hundred = Math.floor(B / 100);

console.log(A * one);
console.log(A * ten);
console.log(A * hundred);
console.log(A * B);