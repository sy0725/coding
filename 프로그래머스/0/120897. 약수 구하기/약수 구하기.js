function solution(n) {
    var answer = [];
    // let index = 1;
    
    // while(index <= n){
    //     if(n % index === 0) {
    //         answer.push(index)
    //     }
    //     index++
    // }
    
    for(let i = 0; i <= n; i++){
        if(n % i === 0) {
            answer.push(i)
        }
    }
    return answer;
}