# React로 포켓몬 도감 만들기

**물론 전역 상태 관리 기능 추가해서~**

이번에는 포켓몬 도감을 간단히 만들어 볼까 합니다.
추후 팀 프로젝트를 할 경우를 대비해 git branch를 나누어 commit을 할 예정입니다.

이번 프로젝트의 주 목적은 상태 관리에 대해 익숙해지는 프로젝트이기에 prop-drilling을 통한 상태 관리, context를 사용한 상태 관리, Redux를 사용한 상태 관리 등 리팩토링을 여러 번 진행하여 그 과정을 commit에 남기는 것이 목표입니다.

---

### 🔗배포

프로젝트를 [여기](https://poke-dex-practice.vercel.app/Dex)에서 확인할 수 있습니다.

---

## 📕Github commit rules

1. start - 프로젝트 시작
2. add - 새 파일 등록
3. delete - 파일 삭제
4. fix - 버그 수정
5. update - 기능 추가
6. style - 스타일 추가 & 변경
7. refactor - 코드 리팩토링
8. text - 임시 테스트 코드

---

## 📖나만의 룰

1. 주석 열심히 달기
2. 컴포넌트 분리 열심히 하기
3. 컴포넌트 이름은 PascalCase
4. 함수&변수 이름은 camelCase
5. 상수 이름은 UPPER_CASE
6. 커스텀 훅 적극 사용하기
7. 커스텀 훅은 use로 시작하기
8. 함수&변수명은 동사로 시작해서 한 눈에 알기 쉽게 작명하기
9. **기본 기능 구현 똑바로하기!!**
10. **리팩토링 과정 중 빠진 기능 없는지 잘 체크하기!!**

---

## 🔧기능

- 포켓몬 목록 확인
- 포켓몬 상세 정보 보기
- 최대 6개의 포켓몬 추가 가능
- 추가된 포켓몬 삭제하기
- Toast 및 Alert 메시지로 사용자 피드백 제공
- 반응형 웹페이지
- 스크롤 위치 저장 기능

---

## 🧑‍💻사용 기술

- **Frontend**: React, Redux Toolkit, React Router, React Toastify, SweetAlert2
- **State Management**: Redux Toolkit
- **Styling**: Styled Components

---

## ✅진행 과정 블로그

- [[250205] 욕심은 완성하고 부려라](https://velog.io/@rlarudals61/250205-%EC%9D%B4%EA%B1%B0-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%A0%80%EC%9E%A5%EC%9D%B4-%EC%99%9C-%EC%95%88-%EB%90%98%EB%8A%94-%EA%B1%B0%EC%95%BC)

- [[250206] 에러 코드를 보는 힘을 길러라!](https://velog.io/@rlarudals61/250206-%EC%99%9C-%EC%83%9D%EC%82%AC%EB%9E%8C-%EC%9E%A1%EB%83%90)

- [[250210] 이번 프로젝트 회고록](https://velog.io/@rlarudals61/250201-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0-%EC%A7%81%EC%A0%91-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)

- [[250211] 완성 했으니 욕심 좀 부려볼까?](https://velog.io/@rlarudals61/250211-%ED%95%98%ED%95%98-%EB%A6%AC%EB%B2%A4%EC%A7%80-%EC%84%B1%EA%B3%B5)

---

<br>

> 제작 시작 [250204] ~ 제작 완료 [250210] > <br>
