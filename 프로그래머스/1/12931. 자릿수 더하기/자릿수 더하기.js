function solution(n)
{
    

    let a = String(n)
    let b = a.split('')
    let answer = b.reduce((acc, cur) => acc + cur * 1, 0)
    return answer;
}