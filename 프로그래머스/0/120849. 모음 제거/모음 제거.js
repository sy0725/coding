function solution(my_string) {
    
    const str = 'aeiou'
    let newString = my_string.split('').filter((e)=>(!str.includes(e))).join('')
    
    return newString
    
}