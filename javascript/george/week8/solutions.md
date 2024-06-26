### 1. 브라우저 랜더링 과정을 설명하고 script 태그에서 Async와 Defer의 차이에 대해 설명해주세요.

 - 1. html, css, js, 이미지 등 랜더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.
 - 2. 브라우저 랜더링 엔진은 서버로부터 응답된 html, css를 파싱해 DOM, CSSOM을 생성하고 이들을 결합해 렌더 트리를 생성한다.
 - 3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱해 AST를 생성하고 바이트 코드로 변환하여 실행한다. 이때 자바스크립트는 DOM API를 통해 DOM, CSSOM을 변경할 수 있다. 변경된 DOM, CSSOM은 다시 렌더 트리로 결합된다.
 - 4. 렌더 트리를 기반으로 HTML 요소의 레이아웃을 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.

 - 둘다 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다.
 - 
 - async: 자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱이 중단된다.
   - async 어트리뷰트를 여러개 지정하면 순서와 상관없이 로드가 완료된 자바스크립트부터 먼저 싱행되므로 순서가 보장되지 않는다.
 - defer: 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후 진행된다. DOM 생성이 완료된 이후 싱행되어야 할 자바스크립트에 유용하다.
  
### 2. 아래 코드의 실생 순서를 설명하세요.
```
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });
}

asyncRun(baseData, idx =>console.log(idx))
```

### 3. Async, Await을 설명하세요.
 - Async: Async키워드를 사용해 해당 함수가 비동기적이라는 것을 표시한다. Async함수는 언제나 프로미스를 반환한다. Async 함수가 명시적으로 프로미스를 반환하지 않더라도 Async 함수는 암묵적으로 반환값을 Resolve하는 프로미스를 반환한다.
 - Await: Await 키워드는 반드시 프로미스 앞에서 사용하고 Async 함수 내부에서만 사용할 수 있다. Await 키워드는 프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리결과를 반환한다. 