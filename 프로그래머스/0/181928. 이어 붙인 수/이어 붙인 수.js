function solution(num_list) {
    var answer = 0;
    
    
    let a = num_list.filter(value => value % 2 === 0)
    
    let b = num_list.filter(value => value % 2 === 1)

    
    let c = Number(a.join(''))
    let d = Number(b.join(''))
 
    
    answer = c + d
    
    
    return answer;
    
}

// 1. 짝수만 이어진수 따로 빼고
// 2. 홀수만 이어진수 따로 뺀 다음
// 3. + 해주면 끝

