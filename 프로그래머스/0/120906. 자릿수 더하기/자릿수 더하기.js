function solution(n) {
    var answer = 0;
    
    let a = String(n)
    let b = a.split('')
    answer= b.reduce((acc, cur) => acc + cur * 1, 0)
    
    return answer;
    

}