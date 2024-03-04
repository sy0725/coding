function solution(my_string, num1, num2) {
  const splitWord = my_string.split("");
  const num1Word = splitWord[num1];
  const num2Word = splitWord[num2];

  splitWord.splice(num1, 1, num2Word);
  splitWord.splice(num2, 1, num1Word);

  return splitWord.join("");
}