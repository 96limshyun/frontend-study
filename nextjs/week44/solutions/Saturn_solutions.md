1. 라우터 핸들러는 (\_**\_) 메서드에 대해 캐싱을 사용할 수 있고 캐시하려면 Route 핸들러 파일에서 (****\_******)와 같은 경로 구성 내용을 포함해야 한다.

- `GET`, `const dynamic = 'force-static'`

2. 미들웨어에 적합하지 않은 상황은 무엇이 있나요?

- **복잡한 데이터 가져오기 및 조작**: 미들웨어는 직접적인 데이터 가져오기나 조작을 위해 설계되지 않았으므로, 이 작업은 Route 핸들러나 서버 측 유틸리티에서 수행해야 함.
- **무거운 계산 작업**: 미들웨어는 가벼워야 하며 빠르게 응답해야 하므로, 페이지 로드 지연을 일으킬 수 있음. 무거운 계산 작업이나 긴 시간 동안 실행되는 프로세스는 전용 Route 핸들러에서 처리해야 함.
- **광범위한 세션 관리**: 미들웨어는 기본적인 세션 작업을 관리할 수 있지만, 광범위한 세션 관리는 전용 인증 서비스나 Route 핸들러에서 관리해야 함.
- **직접적인 데이터베이스 작업**: 미들웨어에서 직접 데이터베이스 작업을 수행하는 것은 권장되지 않음. 데이터베이스 상호작용은 Route 핸들러나 서버 측 유틸리티에서 수행해야 함.

3. 미들웨어에서 matcher는 무엇인가요?

- matcher는 특정 경로에서만 미들웨어가 실행되도록 필터링함
