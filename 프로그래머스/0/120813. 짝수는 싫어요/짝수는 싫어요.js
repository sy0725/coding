function solution(n) {
    var answer = [];
    
    for(let i = 0; i <= n ; i++){
        if(i % 2 === 1){
            answer.push(i)
        }
    }
    
    
    return answer;
}


// n 은 숫자형이기에 map은 불과 그럼 배열로 만들기 먼저 ?