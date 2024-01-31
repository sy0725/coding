function solution(num_list) {
    var answer = [...num_list];
    
    const a = answer[num_list.length-1]
    const b = answer[num_list.length-2]


      if(a>b){
       answer.push(a-b)
   }else if (a<=b){
       answer.push(a*2)
   }else false
    return answer
}
    


// 마지막 원소가 이전 원소보다 크면 마지막 원소에서 -1 뺀 값을 추가
// 그렇지 않다면 마지막 원소의 두배의 값을 return

// 조건문을 사용해서 push()

// 마지막 배열을 가져오려면 ??