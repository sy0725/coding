function solution(arr) {
    var answer = 0;
    const a = arr.reduce((acc, cur) => acc + cur)
    
    answer = a / arr.length
    return answer;
}