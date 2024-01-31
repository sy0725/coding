function solution(num_list) {
    var answer = 0;
    let a = num_list.reduce((acc,cur) => acc * cur)
    console.log(a)
    
    let b = num_list.reduce((acc,cur) => (acc + cur))
    console.log(b)
    answer = a < (b * b) ? 1 : 0
    return answer;
}