1. 타입이 추론될 수 있는 경우라도 타입을 명시하면 더 좋은 경우 두 가지는?

- 객체 리터럴, 함수 반환

2. 타입 넓히기는 무엇인가요?

- 타입체커가 타입을 명시하지 않은 경우 타입을 결정해야 하는데, 이때 할당 가능한 값들의 집합을 유추하는 것

3. 아래는 사용자 정의 타입 가드의 기본 구조 입니다. 빈칸을 완성해주세요.

```tsx
function isString(value: any): value is string {
  return typeof value === "string";
}
```
