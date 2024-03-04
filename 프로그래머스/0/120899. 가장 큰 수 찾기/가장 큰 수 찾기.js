function solution(array) {
    
    let a = Math.max(...array)
    let b = array.indexOf(a)
    let answer = [a, b]
    return answer;
}