# ![logo](./public/img/logo.png)
> 2019 OSAM(Open Source Academy for Military) 출품작

> 초기 화면정의서: [링크](https://ovenapp.io/view/rl9AHLii5XaYT9M8sxbzFZ9RXaVPNCzh)

> 인공지능 기능 활성화법 : src/component/MyApply.vue의 data() 내부 apiKey에(254line) apikey: "AIzaSyBQVYrX7JyBibRxQ7WIaLwEiShnynaJZLs"를 입력해줘야 합니다.


![intro](./img/intro.gif)

## 실행 환경
- CPU : Intel i7-6700HQ 2.60GHz
- RAM : 8GB
- OS : Windows 7
- Browser : Chrome 77.0.3865.120
- Node.js : v10.16.3
- NPM : v6.9.0

## 실행
> 실행을 위해서는 Node.js와 git이 설치되어 있어야 합니다
1. 저장소 클론
```
git clone https://github.com/identity16/WEB_Militapply_Team.git
```
2. 폴더 이동
```
cd WEB_Militapply_Team
```
3. Dependency 설치
```
npm install
```
4. [json-server](https://github.com/typicode/json-server)으로 된 Mock DB 실행 (데모용 데이터가 들어가있음)
```
npm run mockdb
```
5. vue 프로젝트 실행
```
npm run serve
```
> 본 프로젝트는 프로토타입이므로 개발 모드로 실행됩니다.
6. 사이트 접속

브라우저에서 [https://localhost:8080](https://localhost:8080)에 접속합니다

## 기능 안내

### 대시보드

다양한 군 관련 정보와 현재 사람들이 보고있는 특기, 입영 관련 일정 등의 정보를 제공하는 화면

![](./img/dashboard.png)

### 특기 검색

병무청에서 제공하는 기본적인 정보 뿐만 아니라 현역 또는 전역자가 본인의 특기를 다양한 방면에서 평가한 정보를 열람(누구나) / 수정(현역, 전역 인증 시)할 수 있는 화면(현재는 육군 > 전문특기병 > S/W 개발병에 대한 데이터가 데모용으로 존재)

![](./img/search.png)

### 통계

특기 정보, 사용자 행동 패턴 등의 데이터를 모아 입영 지원에 도움될 만한 여러가지 통계를 보여주는 화면. 현재는 경쟁률 BEST / WORST, 조회 수만 있지만 다양한 확장 가능

![](./img/statistics.png)

### 나의 지원정보

통합 지원서, 특기별 지원서 등의 실제 지원과 관련된 데이터들을 미리 작성해 볼 수 있는 화면. 이 뿐만 아니라 작성 내용을 토대로 인공지능 API를 이용해 더 나은 방향으로 작성하도록 유도하거나 확률 예측 등의 기능도 제공함. 인공지능 관련 기능은 API Key를 입력해야 정상동작.

#### 통합 지원서 작성/수정

![](./img/apply1.png)

#### 특기별 지원서 작성/수정

![](./img/apply2.png)

#### 인공지능 입영예측

작성된 지원 정보를 AI로 분석한 데이터를 보여줌

![](./img/ai1.PNG)

#### 복무(전역)자 인증

특기 정보를 남기기 위해 필요한 인증 과정. 병적증명서 이미지를 첨부하면 OCR 기술을 이용해 정보를 인식하여 인증함

![](./img/ai2.PNG)

## 파일 구조
프로젝트 구조는 [vue-cli](https://github.com/vuejs/vue-cli)로부터 생성된 것을 기반으로 한다.

### `/data`
- `json-server`를 통해 데모용 DB를 생성하는데, 이 때 읽어들이는 파일인 `db.js`가 들어있음
- `db.js`의 내용을 토대로 데모 API 서버가 동작함

### `/img`
- `README.md`에 삽입될 이미지를 넣는 폴더
- 프로젝트 내용과는 관련 없음

### `/public`
- 이미지, 폰트, HTML 등의 정적파일이 위치하는 폴더
- URL 상에서는 `/` 경로로 매핑됨

### `/src`
- 소스파일이 들어있는 폴더

#### `assets`
- 소스코드 내부에서만 쓰이는 동적으로 변경되지 않는 리소스들을 넣는 폴더
- 동적으로 변경될 가능성이 있는 리소스는 `/public` 경로에 넣음

#### `components`
- `.vue` 확장자를 가진 뷰 컴포넌트를 넣는 폴더

## 라이센스 정보
- MIT License: 자세한 내용은 [LICENSE](https://github.com/identity16/dr-mili/blob/master/LICENSE) 파일에서 확인

## 개발자
- 신원준 (dnjswns0930@gmail.com)
  - 국군지휘통신사령부 본부근무지원대 일병
  - 디자인, 문서, 프론트엔드 UI/UX 개발
- 손민우 (mwson987@gmail.com)
  - 국군지휘통신사령부 본부근무지원대 일병
  - 기획, 인공지능 관련 주요 기능 구현

## Known Issue
- 일부 정보를 제외하면 엉뚱한 링크로 가거나 데이터가 제대로 뜨지 않음

## Troubleshooting
- 현재 데모용 데이터만 추가된 상태여서 발생한 현상이며, `db.js`를 수정하여 데이터를 제대로 등록해준다면 정상 동작함

## Change Log
- v0.1 : 프로토타입. OSAM 최종 제출
