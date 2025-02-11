## 1. error.tsx와 notFound()는 각각 어떤 상황에서 사용하는게 좋은지 설명하세요.
- error.tsx: 전역 에러 처리 및 데이터 로딩이나 서버 오류 같은 예상치 못한 에러 처리
- notFound(): 특정 리소스가 없을때 리다이렉트하는데 사용

## 2. form 양식을 검증할때 클라이언트 측 검증과 서버 측 검증의 차이점을 설명하세요.
- 클라이언트 측 검증: 즉각적이고 빠른 사용자 피드백을 제공함. 하지만 악의적인 사용자가 이를 우회할 가능성이 있음
- 서버 측 검증: 악의적인 사용자가 검증을 우회하는 시도를 방어하며, 데이터베이스로 보내기 전에 데이터를 안전하게 검증할 수 있어 보안에 유리

## 3. 매터 데이터, robots.txt, sitemap.xml이 SEO에서 어떠한 역할을 하는지 설명하세요.

- 메타데이터:
  - 페이지마다 메타데이터를 추가하여 검색엔진에 페이지의 정보를 제공할 수 있습니다. 메타 데이터를 추가하면 다음과 같은 이점이 있습니다.
    - 크롤봇: 크롤봇에게 키워드 정보를 제공하여 구글 검색 시 키워드 기반으로 노출이 될 수 있도록 합니다(ex. title)
    - 유저: 유저가 검색 페이지에서 검색했을 때 유저에게 관련 정보를 많이 전달해주어 좀 더 주목할 수 있도록 하고 클릭률을 높입니다.(ex. description, open graph)

- sitemap: 
  - 사이트맵은 사이트에 있는 페이지, 동영상 및 기타 파일과 그 관계에 관한 정보를 제공하는 파일입니다.
  - 크롤봇에게 페이지 구성 및 기타 파일의 관계를 알려줌으로써 일반적인 크롤링 과정에서 발견되지 않는 웹페이지를 모두 크롤링할 수 있께 도와줍니다.

- robots.txt:
  - 크롤러가 사이트에서 엑세스할 수 있는 url을 검색엔진 크롤러에게 알려 줍니다.
  - 크롤러가 불필요한 페이지를 크롤링하지 않도록 관리할 수 있어 조금 더 효율적으로 동작할 수 있게 됩니다.

- 저는 SEO 개선할 때 아래 글이 도움 많이 됐습니다!

[SEO 개선 초심자 가이드](https://fe-developers.kakaoent.com/2022/221208-basic-seo-guide/)

[사이트맵 알아보기](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=ko)

[robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=ko)
