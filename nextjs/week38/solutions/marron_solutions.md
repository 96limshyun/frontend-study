# nextjs 5 - 8

1. seeding에 대해 설명해주세요.

_답_

```
초기 데이터 세트로 데이터베이스를 채우는 프로세스
```

2. 병렬 데이터 요청에서 하나의 요청이 다른 모든 요청보다 느리다면 어떻게 되나요?

```ts
const data = await Promise.all([
  invoiceCountPromise,
  customerCountPromise,
  invoiceStatusPromise,
]);
```

_답_

```
모든 요청이 완료될 때까지 기다리므로 전체 요청 시간이 그만큼 길어진다.

이를 해결하기 위해 개별적으로 처리, 시간 초과 처리, 개별 에러처리 등의 방법이 있다.
```

3. 정적 렌더링과 동적 렌더링에 대해 설명해주세요.

_답_

```
정적 렌더링은 HTML을 빌드 시점에 생성해 빠르게 제공하며, 변경이 적고 SEO가 중요한 페이지에 적합합니다.
동적 렌더링은 HTML을 요청 시점에 생성해 최신 데이터를 반영할 수 있지만, 성능에 더 많은 리소스가 필요합니다.

정적 렌더링은 블로그나 마케팅 페이지에, 동적 렌더링은 대시보드 같은 실시간 데이터에 적합합니다.
```