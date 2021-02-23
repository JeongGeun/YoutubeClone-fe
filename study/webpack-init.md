# webpack-init

## path.resolve vs path.join
- 인자로 받은 경로들을 하나로 합쳐 문자열 형태로 리턴하는 것이 공통점
- resolve는 오른쪽에서 왼쪽으로 경로를 읽고 '/폴더명'을 만나면 절대경로로 인식하여 그 경로를 바로 반환함.
-  https://programming119.tistory.com/106

## webpack 설정관련(더 공부할 것)
- webpack4에서 5로 넘어가면서 부터 webpack과 webpack-dev-server의 버전차이에 유의해서 버전을 설치해야 할 것같다.
- webpack-cli를 v4에서 v3으로 내렸더니 getOption에러가 없어졌는데 이유를 잘 모르겠다..
- 타입스크립트 설정관련
    - https://yamoo9.gitbook.io/typescript/cli-env/tsconfig