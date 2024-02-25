let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let T = Number(input[0]);

for(let i=1;i<=T;i++) {
   let count = 0;
   let score = 0;
   let str = input[i];
   let len = input[i].length;

   for(let j=0; j<len; j++) {
      if(str[j] == 'O') {
         count++;
      } else{
         count = 0;
      }

      score += count;
   }
   console.log(score);
}