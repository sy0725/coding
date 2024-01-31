function solution(a, b) {
    var answer = 0;
    
    let c = String(a)
    let d = String(b)
    let e = c + d
    let f = d + c
    let g = Number(e)
    let h = Number(f)
    
    answer = e < f ? h : g
    return answer;
}