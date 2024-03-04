function solution(my_string) {
    
    let a = my_string.split('')
    let b = a.map(number => +number)
    let c = b.filter(e=>!isNaN(e))
    
    let answer = c.sort((a,b) => a - b)
    
    return answer;
}