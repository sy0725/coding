# 필수 개념

## 숫자형 메서드

### Math.abs()

- `Math.abs()` 함수는 주어진 숫자의 절대 값을 반환.
- 양수이거나 0이라면 리턴
- 음수라면 반대값, 즉 양수 반환

```js
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(-2, 5)); // 7
```
