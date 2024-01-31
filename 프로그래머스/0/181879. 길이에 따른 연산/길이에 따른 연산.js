function solution(num_list) {
    var answer = 0;
    
    
    if(num_list.length >= 11){
      return  answer = num_list.reduce((acc,cur) => acc + cur)
    } else {
        return answer = num_list.reduce((acc,cur) => acc * cur)
    }
    
    return answer;
}