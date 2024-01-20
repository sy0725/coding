function solution(array) {
    var answer = 0;
    
    let a = array.sort((a,b) => a - b)
    console.log(a)

    let b = Math.floor(array.length / 2)
    console.log(b)
    
    answer = a[b]
    return answer;
    
    
}


// 중앙값을 찾는 문제
// 배열의 길이는 홀수
// 가운데 값을 찾을라면 어떻게해야하는가 ?
// 우선 배열을 오름차순으로 정렬
// 여기서 가운데 값은 