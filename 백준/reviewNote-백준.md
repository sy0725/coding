# 코디 리뷰

## 브론즈5 - 2475 - 검증수

### 나의 풀이 😅

```js
let a = Number(input[0]) ** 2;
let b = Number(input[1]) ** 2;
let c = Number(input[2]) ** 2;
let d = Number(input[3]) ** 2;
let e = Number(input[4]) ** 2;

let answer = (a + b + c + d + e) % 10;

console.log(answer);
```

- 풀이 방식 : 하나하나 값을 제곱해 총 합의 나머지 10을 한 방식

### 다른 풀이 😱

```js
const sum = input.reduce((acc, cur) => acc + cur * cur, 0);

console.log(sum % 10);
```

- 풀이 방식 : reduce() 를 활용한 풀이방법

### 결론 ✅

- reduce()를 떠올렸지만 아직 백준 컴파일에 익숙하지가 않아 실수를 했다.
- 틀려도 좋으니 한번 시도해보는 습관을 들이기

## 브론즈1 - 1110번 - 더하기 사이클

### 나의 풀이 😅

```js
느낌은 알았는데 풀지 못했다..
```

- 풀이 방식 : 하나하나 split 활용하여 변수를 할당해주고 하드코딩...을 했다..

### 다른 풀이 😱

```js
let num = +input;
let sum = 0;
let count = 0;

while (true) {
  count++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (+input === num) break;
}

console.log(count);
```

- 풀이 방식 : while 반복문을 활용하여 조건문에 맞으면 break 하는 방법

### 결론 ✅

- 반복문이 아직 코딩테스트로 응용을하기에 익숙하지가 않아 어려웠다. 확실히 어디가 모자른지 다시한번 깨닫는다
- 많은 방법이있고 나는 좀 더 효율적인 코드를 찾는데 익숙해져보자 !
