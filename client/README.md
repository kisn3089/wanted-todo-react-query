## Todo Waned-pre-onboarding-challenge-fe-1

## React-Query를 활용한 Todo 웹 서비스

#### 소요기간 2023.02.12 -> 2023.02.16 (4일)

### Update

```
2023.04.08
업데이트 내용
- todo 수정 기능 추가
- 로그인 및 회원가입 "Enter"로 가능하게 구현
- todo 생성 및 수정 "Enter" && "Ctrl" 또는 "Enter" && "Command"로 가능하게 구현
- 수정 시 "수정되었습니다." 라는 안내 문구 애니메이션 추가
- 삭제 버튼 클릭 시 "정말 삭제하시겠습니까?"라는 삭제 확인 버튼 구현
```

> 백엔드와 DB를 원티드에서 제공했기 때문에 배포가 안됩니다! 깃 클론해서 사용해주세요!

### 실행 방법

- Client

```
cd client && npm i && npm start
```

- Server

```
cd server && yarn && yarn start
```

### Technology

- React
- TypeScript
- API
  - React-Query
- CSS
  - Styled-components

> 기능

### 회원가입

- Email 형식임을 확인
- 비밀번호와 비밀번호 확인이 같은지 확인
- 비밀번호와 비밀번호 확인이 틀릴 시 서버에서 응답받은 에러 메세지를 보여준다.
- Email 형식이 맞고 비밀번호와 비밀번호 확인이 6자 이상일 경우 회원가입 버튼 활성화
- "Enter" 입력시 회원가입 진행

### 로그인

- Email 형식임을 확인
- Email 형식이고 비밀번호 6자리 이상일 경우에 로그인 버튼 활성화
- "Enter" 입력시 로그인 진행
- 로그인 실패
  - 응답받은 에러 메세지를 보여준다.
- 로그인 성공
  - 응답받은 Token과 Email을 전역 상태 & 로컬 스토리지에 저장
  - todo 페이지로 이동

### todos 리스트 페이지

- title과 content에 값이 있으면 저징 버튼 활성화
- 저장 버튼 시 todo 생성
  - "Ctrl"과 "Enter" 또는 "Command"와 "Enter" 동시에 입력 시 todo 생성
- todo 클릭 시 해당 todo 상세 페이지로 이동

### todo 상세 페이지

- 수정 버튼
  - todo 업데이트
  - "수정되었습니다." 안내 메세지 날짜 상단에 노출
  - "Ctrl"과 "Enter" 또는 "Command"와 "Enter" 동시에 입력 시 todo 업데이트
- 삭제 버튼
  - "정말 삭제하시겠습니까?" 버튼 생성
    - 클릭 시 해당 todo 삭제 후 todos 페이지로 이동

#### 구현 영상

##### 회원가입 & 로그인

![login](https://user-images.githubusercontent.com/96061695/230711037-e586789f-5706-438f-a03f-67fa81c2ceac.gif)

##### Todo 리스트 페이지 & Todo 상세보기 & Todo 생성

![todo](https://user-images.githubusercontent.com/96061695/230711048-af32885e-d098-46f0-831e-4b9df7588f07.gif)

##### Todo 수정 & Todo 삭제

![edit](https://user-images.githubusercontent.com/96061695/230711098-d7f401e5-a4b0-45a4-99cf-8a1ecdf5c148.gif)

##### 회원가입

<img width="994" alt="signup" src="https://user-images.githubusercontent.com/96061695/230711140-4db94f70-9f52-44e6-9252-da590fb2caa5.png">

##### 로그인

<img width="991" alt="login" src="https://user-images.githubusercontent.com/96061695/230711159-e22e1833-3f62-4c7d-9a71-fcba9fc71eff.png">

##### 회원가입 완료

<img width="992" alt="signuped" src="https://user-images.githubusercontent.com/96061695/230711168-10d9055c-9cfb-4403-bef3-f375cf998ac5.png">

##### Todos

<img width="996" alt="todoInit" src="https://user-images.githubusercontent.com/96061695/230711192-a02200d5-a264-4c67-9251-0017585e3950.png">

##### Todo 상세보기

<img width="991" alt="todo" src="https://user-images.githubusercontent.com/96061695/230711210-cbe9380e-1d82-4bbb-ae9b-84ef7f48fe9b.png">
