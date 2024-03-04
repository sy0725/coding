function solution(num_str) {
    
    
    let a = num_str.split('')
    let b = a.map(number => +number)
    let answer = b.reduce((acc,cur) => acc + cur)
  
    return answer;
}