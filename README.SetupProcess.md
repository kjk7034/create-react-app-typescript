# create-react-app Typescript 프로젝트 설정 과정

[`create-react-app-typescript User Guide`](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/README.md)를 주로 참고하여 진행했습니다.

## 목차

- [create react app typescript](#create-react-app-typescript)
- [npm run eject](#npm-run-eject)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Prettier/Editor is VSCode](#prettiereditor-is-vscode)
- [Adding Airbnb JavaScript Style Guide](#adding-airbnb-javascript-style-guide)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Code Splitting](#code-splitting)
- [Adding a CSS Preprocessor Sass](#adding-a-css-preprocessor-sass)
- [Setting default port](#setting-default-port)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
- [Using HTTPS in Development](#using-https-in-development)
- [Adding a Router](#adding-a-router)
- [Adding HMR](#adding-hmr)
- [Adding redux](#adding-redux)
- [Adding another npm](#adding-another-npm)

## create react app typescript

> 만약 create-react-app가 없으면 `npm install -g create-react-app`으로 설치.

```sh
create-react-app project_name --scripts-version=react-scripts-ts     // 프로젝트 생성
cd project_name                                                      // 프로젝트 폴더로 이동
```

## npm run eject

> 만약 yarn이 없으면 [yarn Installation](https://yarnpkg.com/en/docs/install#windows-stable) 참고.

기본으로 설정되어있는 build tool and configuration를 수정하기 위하여 `eject` 해서 사용.

```sh
yarn eject
```

## Formatting Code Automatically

[Prettier](https://prettier.io/)는 JavaScript, CSS 및 JSON을 지원하는 독창적인 code formatter. Prettier를 사용하면 자동으로 작성하는 코드의 서식을 지정하여 프로젝트 내에서 코드 스타일을 보장할 수 있습니다.

```sh
yarn add husky lint-staged prettier
```

* `husky` makes it easy to use githooks as if they are npm scripts.
* `lint-staged` allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
* `prettier` is the JavaScript formatter we will run before commits.

`package.json`에 다음과 같이 수정.

```diff
...
+ "lint-staged": {
+   "src/**/*.{ts,tsx,json,css}": [
+     "prettier --single-quote --write",
+     "tslint --fix -c tslint.json -p tsconfig.json",
+     "git add"
+   ]
+ },
  "scripts": {
+   "precommit": "lint-staged",
...
```

`tslint --fix -c tslint.json -p tsconfig.json`에서
* c 는 config 의 약어. tslint.json 파일의 옵션들을 확인하고 규칙에 맞춰서 fix 한다.
* p 는 project 의 약어. tsconfig.json 파일에 적힌 파일 경로에서 린트 될 파일을 찾는다.

[참고 - Angular 프로젝트에 prettier 코드포매터 세팅하기](https://feel5ny.github.io/2018/03/11/angular_prettier/)

## Prettier/Editor is VSCode

`.vscode/setting.json`파일에서 다음을 추가.
(만약, 파일이 없다면 파일 > 기본설정 > 설정 > `작업영역 설정`에 추가.)

```json
{
  "editor.formatOnSave": true,
  "[markdown]": {
    "editor.formatOnSave": false
  },
  "tslint.autoFixOnSave": true
}
```

`package.json`에 설정할 내용들 추가.

```json
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all",
    "semi": false
  }
```

바로 다음의 **Adding Airbnb JavaScript Style Guide**을 진행한다.

## Adding Airbnb JavaScript Style Guide

```sh
yarn add tslint-config-airbnb
```

`tslint.json`파일을 다음과 같이 수정

```diff
{
  "extends": [
    "tslint:recommended",
    "tslint-react",
    "tslint-config-prettier",
+    "tslint-config-airbnb"
  ],
...
+  "rules": {
+    "no-console": false,
+    "import-name": false,
+    "semicolon": false,
+    "ter-arrow-parens": [true, "as-needed", { "requireForBlockBody": false }],
+    "trailing-comma": true,
+    "variable-name": [
+      true,
+      "ban-keywords",
+      "check-format",
+      "allow-pascal-case"
+    ],
+    "object-literal-sort-keys": false,
+    "interface-over-type-literal": false,
+    "interface-name": false
+  }
}
```

기본 `airbnb rule`은 [tslint-config-airbnb tslint](https://github.com/progre/tslint-config-airbnb/blob/master/tslint.js)에서 확인할 수 있으며, 변경하고 싶거나 필요한 내용이 있으면 `rules`에 추가하여 사용.

* no-console : console을 사용하기 위해 추가
* import-name : Misnamed import 해결.
* semicolon : semicolon 없애기
* ter-arrow-parens : Expected parentheses around arrow function argument having a body with curly braces. 해결
* trailing-comma : 마지막에 콤마 붙이기
* variable-name : stateless functional component 사용시 첫 대문자 사용으로 추가.
* object-literal-sort-keys : Checks ordering of keys in object literals.
* interface-over-type-literal : Prefer an interface declaration over a type literal (type T = { ... })
* interface-name : Makes it easy to differentiate interfaces from regular classes at a glance.

서버를 재시작(yarn start)하고 파일 저장시 자동으로 설정된 내용들이 저장되는지 확인.

## Changing the Page `<title>`

```sh
yarn add react-helmet
yarn add -D @types/react-helmet
```

[react-helmet](https://github.com/nfl/react-helmet)을 이용하여 title 을 변경할 수 있으며, 꼭 title만이 아닌 head 정보들도 변경할 수 있다.

```tsx
import * as React from 'react'
import { Helmet } from 'react-helmet'

class HelmetTest extends React.Component {
  public render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
        </Helmet>
        <p>react-helmet 사용</p>
      </div>
    )
  }
}

export default HelmetTest
```

## Code Splitting

코드 분할

[Route-based code splitting](https://reactjs.org/docs/code-splitting.html)에 있는 [`React Loadable`](https://github.com/jamiebuilds/react-loadable)을 사용.

```
yarn add react-loadable
yarn add -D @types/react-loadable
```

`tsconfig.json`에 다음과 같은 내용 추가.

```json
"compilerOptions": {
  ...
  "allowSyntheticDefaultImports": true
}
```

## Adding a CSS Preprocessor Sass

`node-sass`를 사용하지 않고, `node-sass-chokidar`을 사용.

scss로 작업한 파일은 자동으로 css로 변환해주고 import는 css 파일로 한다.

```
yarn add node-sass-chokidar
```

`package.json`에 다음과 같이 수정.

**--usePolling**를 추가하지 않으면, scss 파일 수정 시 파일 변경을 감지하는 부분에서 `VSCODE`의 이슈가 있어서 에러가 발생함.

```diff
   "scripts": {
     ...
+   "build-css": "node-sass-chokidar src/ -o src/",
+   "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive --usePolling"
     ...
```

병렬 또는 순차적으로 여러 npm 스크립트를 실행하기 위하여 다음을 추가 설정.

```
yarn add npm-run-all
```

`package.json`에 다음과 같이 수정.

```diff
   "scripts": {
     ...
-    "start": "node scripts/start.js",
-    "build": "node scripts/build.js",
+    "start-js": "node scripts/start.js",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && node scripts/build.js",
     ...
```

## Setting default port

PORT는 `scripts/start.js`에서 `DEFAULT_PORT`설정. (ex: 443).

```diff
- const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
+ const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 443
```

## Proxying API Requests in Development

예를 들어 `package.json`에 다음과 같이 `proxy` 추가

```json
  "proxy": {
   "/v1": {
     "secure": false,
     "target": "targetUrl"
   },
   "/api": {
     "secure": false,
     "target": "targetUrl"
   }
 }
```

## Using HTTPS in Development

`package.json`에서 `start-js` 시점에 `set HTTPS=true&&`추가. (Windows - cmd.exe)

```diff
  "scripts": {
-    "start-js": "node scripts/start.js",
+    "start-js": "set HTTPS=true&&node scripts/start.js",
  }
```

Windows - cmd.exe가 아닌 환경에서는 [Using HTTPS in Development](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-https-in-development) 참고.

## Adding a Router

```sh
yarn add react-router-dom
yarn add -D @types/react-router-dom
```

다음과 같은 샘플로 작업 가능. 여기서 `Loadable`과 같이 사용

```tsx
const HomeComponent = Loadable({
  loader: () => import('./routes/Home'),
  loading: LoadingComponent
})
...
<Router>
  <div className="App">
    ...
    <Switch>
      <Route exact={true} path="/" component={HomeComponent} />
      <Route path="/test" component={TestComponent} />
    </Switch>
    ...
  </div>
</Router>
```

## Adding HMR

기본적으로 hot reload가 설정되어 있지만 HMR(Hot Module Replacement)을 사용하기 위하여 다음과 같이 진행.
`module.hot` 에러를 해결하기 위해서 **`@types/webpack-env`** 추가

```sh
yarn add @types/webpack-env -D
```

`index.tsx`에 다음과 같은 내용 추가
```diff
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()

+ if (module.hot) {
+   module.hot.accept('./App', () => {
+     ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
+   })
+ }
```

## Adding redux

* Adding redux
* react-redux
* Adding redux-saga
* Adding immer

```
yarn add redux react-redux redux-saga immer
```

## Adding another npm

* [date-fns](https://date-fns.org/)
  * 날짜 유틸리티 라이브러리
* [axios](https://github.com/axios/axios)
  * Promise based HTTP client for the browser and node.js
* 추후 작업하면서 필요한 내용들 조율하여 추가