function solution(num_list) {
    var answer = [];
    
//     let a = num_list.sort((a,b) => a - b)
//     let b = a.slice(0,5)
//     console.log(b)
    
    answer = num_list.sort((a,b) => a - b).slice(0,5)
    
    return answer;
}