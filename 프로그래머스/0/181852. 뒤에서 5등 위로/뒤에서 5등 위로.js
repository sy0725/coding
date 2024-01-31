function solution(num_list) {
    var answer = [];
    
    let a = num_list.sort((a,b) => a- b)
    console.log(a)
answer = a.splice(5)
   
    return answer;
}