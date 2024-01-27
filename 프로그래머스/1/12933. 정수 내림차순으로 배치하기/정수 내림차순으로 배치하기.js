function solution(n) {
    
    let a = String(n)
    let b = a.split('')
    let c = b.sort((a,b) => b - a)
    let d = c.join('')
    let answer = Number(d)
    
    return answer;
}