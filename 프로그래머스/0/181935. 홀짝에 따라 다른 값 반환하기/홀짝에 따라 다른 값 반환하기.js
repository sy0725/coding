function solution(n) {
    var answer = 0;
    
    if (n % 2 === 0){
        // 짝수라면
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0) {
                answer += i**2   
            }
        }
    } else {
        // 홀수라면
        for (let i = 0; i <= n; i++) {
            if (i % 2 !== 0) {
                answer += i
            }
        }
    }
    return answer;
}
