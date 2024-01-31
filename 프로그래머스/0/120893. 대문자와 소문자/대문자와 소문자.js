function solution(my_string) {
    
    var answer = '';
    
    let a = [...my_string]
    answer = a.map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
    
    return answer;
}


    // let arr=[...my_string].map(e => e===e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('');