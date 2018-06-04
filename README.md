프로젝트를 구성하면서 고민한 내용들과 설정한 과정들에 대해서 간단하게 정리했습니다.

천천히 읽어보시고 잘못된 내용, 다른 의견, 더 좋은 방법들에 대해서 많은 개발자분들과 대화를 나누고 싶습니다. :)

## 목차(Table of Contents)

- [개발 환경](#개발-환경)
- [라이브러리 선택](#라이브러리-선택)
- [상태 관리 선택](#상태-관리-선택)
- [정적 타이핑 선택](#정적-타이핑-선택)
- [라우터](#라우터)
- [코드 분할](#코드-분할)
- [CSS 전처리기](#CSS-전처리기)
- [코딩 스타일 가이드](#코딩-스타일-가이드)
- [폴더 구조](#폴더-구조)
- [설치 및 실행](#설치-및-실행)
- [프로젝트 설정 과정](#프로젝트-설정-과정)

## 개발 환경

* OS : window
* 형상관리 : git
* 배포 자동화 : [Jenkins](https://jenkins.io/)
* 에디터 : [Visual Studio Code](https://code.visualstudio.com/)
* 서버 언어 : java
  * SSR은 하지 않기로 결정 됨.

## 라이브러리 선택

[React](https://reactjs.org/)를 선택.

선택한 가장 이유는 다른 프로젝트들을 React, React Native를 이용하여 웹과 모바일앱 다수를 만든 경험이 있고, 추후 모바일 앱 개발 진행 시 아직 확정되진 않았지만 RN을 또 사용할 생각으로 선택했습니다.

`16.3.x`의 Lifecycle Methods 사용. ([참고 - React Component Lifecycle Methods from v16.3 with example](http://javasampleapproach.com/frontend/react/react-component-lifecycle-methods-from-v16-3-react-lifecycle-example))

`componentWillMount, componentWillReceiveProps, componentWillUpdate` **사용하지 않기!!**

## 상태 관리 선택

`Context API`, `MobX`도 고려하긴 했지만 프로젝트에는 Redux를 선택.

기존의 학습 경험이 선택한 이유 중 가장 큽니다.

미들웨어로 기존에는 `redux-thunk`를 주로 사용했지만, 이번에는 action을 더 명확하게 관리한다는 생각이 들어서 [`redux-saga`](https://github.com/redux-saga/redux-saga)를 선택.

([참고 - redux-saga로 비동기처리와 분투하다.](https://github.com/reactkr/learn-react-in-korean/blob/master/translated/deal-with-async-process-by-redux-saga.md))

`reducer`에서 현재 state를 수정하고 다음의 불변 상태의 트리를 생성하는 용도로 [`immer`](https://github.com/mweststrate/immer) 사용.

## 정적 타이핑 선택

먼저 정적 타이핑을 통해서 다양한 버그를 사전에 예방하고, 더 나은 문서화 등의 큰 장점이 있어서 사용하기로 결정.

`Flow`와 `Typescript`를 가지고 간단하게 환경 설정 및 테스트를 진행했습니다.

VSCODE와의 연결, 커뮤니티 활성화, 다른 라이브러리나 프레임워크로 전환 시에도 도움이 될 것이라고 판단하여 `Typescript`를 선택했습니다.

## 라우터

[`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)을 사용.

## 코드 분할

코드 분할을 해서 현재 필요한 것만 Lazy-load 할 수 있어 앱의 성능을 향상시키기 위해서 사용.

React 공식 사이트에 있는 [`React Loadable`](https://reactjs.org/docs/code-splitting.html#react-loadable)을 사용.

## CSS 전처리기

[PostCSS](https://github.com/postcss/postcss)를 사용하고 싶었지만, 작업하실 분에게 최대한 맞춰서 `Sass`를 선택.

이 과정에서 제일 많이 사용하는 `node-sass`를 사용하지 않고, `node-sass-chokidar`을 선택했습니다. 그 이유는 다음과 같습니다.

**Why node-sass-chokidar?**

node-sass has been reported as having the following issues:

* node-sass --watch has been reported to have performance issues in certain conditions when used in a virtual machine or with docker.
* Infinite styles compiling [#1939](https://github.com/facebookincubator/create-react-app/issues/1939)
* node-sass has been reported as having issues with detecting new files in a directory [#1891](https://github.com/sass/node-sass/issues/1891)

node-sass-chokidar is used here as it addresses these issues.

## 코딩 스타일 가이드

[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)를 적용.

Code Formatter로 [`Prettier`](https://github.com/prettier/prettier)를 적용.

## 폴더 구조

`create-react-app eject` 해서 생성된 폴더를 제외하고 작업 폴더(src) 구조만 정리

```
src
--| actions     // payloads of information that send data from your application to your store
--| api         // request api
--| components  // components
--| css         // stylesheet
--| images      // images
--| pages       // pages based on routes
--| reducers    // application’s state changes in response
--| sagas       // Configuring redux-saga
--| store       // configureStore
--| utils       // utility functions

```
## 설치 및 실행

```sh
git clone https://github.com/kjk7034/create-react-app-typescript.git
cd create-react-app-typescript
yarn
yarn start
```

## 프로젝트 설정 과정

[`create-react-app Typescript 프로젝트 설정 과정`](./README.SetupProcess.md)을 다음과 같이 정리했습니다.

* create react app typescript
* npm run eject
* Formatting Code Automatically
* Prettier/Editor is VSCode
* Adding Airbnb JavaScript Style Guide
* Changing the Page `<title>`
* Code Splitting
* Adding a CSS Preprocessor Sass
* Setting default port
* Proxying API Requests in Development
* Using HTTPS in Development
* Adding a Router
* Adding HMR
* Adding redux
* Adding another npm