function solution(sides) {
    var answer = 0;
 
    let a = sides.sort((a,b) => 
        b - a
    )
    let x = a[0]
    let y = a[1]
    let z = a[2]
   
    
    answer = y + z > x ? 1 : 2
    
    return answer;
}

// 가장 긴 변의 길이는 다른 두변의 길이의 합보다 작아야한다. a + b > c
// 세변의 길의가 담긴 배열은 sides 매개변수
// a + b > c = 1 , a + b < c = 2

// 1. 가장 큰 배열의 요소를 찾아야한다.
// 2. 큰 요소와 나머지 값을 비교하는 식을 구성해야한다.
// 3. 큰 요소를 가장 앞에 나오게는 가능하지. sort() 로 분류하고
// 4. 거기에 변수를 할당해주고 , 그리고 진행.