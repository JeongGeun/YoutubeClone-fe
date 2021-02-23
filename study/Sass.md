# Sass

- css-pre-processor로 복잡한 작업을 쉽게 할 수 있게 해줌
- SCSS는 CSS의 상위집합으로서  CSS와 동일한 문법으로 SASS의 기능들이 추가됨





## 0. Comment(주석)

```scss
Sass

/* You can See me */

// You can't see me

/* You
   Can
   See
   Mee
*/

Css

/* You can See me */
/* You
   Can
   See
   Mee
*/
```



## 1.Variable(변수)

- css에 변수 개념을 도입함
- 변수로 사용 가능한 형태는 숫자, 문자열, 폰트, 색상, NULL , LISTS와 maps가 있다
- 변수를 특정 selector (선택자) 에서 선언하면 해당 selector 에서만 접근이 가능합니다.

```scss
$primary-color: #333;

body {
  background-color: $primary-color;
}

$primary-color: #333;


//변수를 선언 할 때, 변수를 global (전역) 하게 설정 할 때는 !global 플래그를 사용
body {
  $primary-color: #eee !global;;
  background-color: $primary-color;
}

p {
  color: $primary-color;
}
//!default 플래그는 해당 변수가 설정되지 않았거나 값이 null 일떄 값을 설정합니다.
$primary-color: #333;

$primary-color: $eee !default;

p {
  color: $primary-color;
}
```



## 2. Math Operators

+,-,/와 같은 수학 연산자가 가능해졌다.

```scss
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```



## 3. 내장함수

- darken과 같은 내장 함수들이 많음
- https://sass-lang.com/documentation/modules



## 4. 중첩가능

```javascript
/* Sass */
.container {
    width: 100%;
    h1 {
        color: red;
    }
}

a {
  color: black;
  &:hover {
    text-decoration: underline;
    color: gray;
  }
  &:visited {
    color: purple;
  }
}

는 아래와 같다.

a {
  color: black;
}
a:hover {
  text-decoration: underline;
  color: gray;
}
a:visited {
  color: purple;
}
```



## 5. import(불러오기)

- 특정 scss파일을 불러와 import가 가능해짐

```javascript
@import "layout.scss";
```





## 6. Extend(상속)

```javascript
.box {
  border: 1px solid gray;
  padding: 10px;
  display: inline-block;
}

.success-box {
  @extend .box;
  border: 1px solid green;
}
```



## 7. Mixin

- extend와 비슷한 기능으로 argument를 받을 수 있다.

```scss
@mixin headline ($color, $size) {
  color: $color;
  font-size: $size;
}

h1 {
  @include headline(green, 12px);
}
--------------------------------------------------
h1 {
  color: green;
  font-size: 12px;
}
----------------------------------------------------
@mixin media($queryString){
    @media #{$queryString} {
      @content;
    }
}

.container {
    width: 900px;
    @include media("(max-width: 767px)"){
        width: 100%;
    }
}
----------------------------------------------------
.container {
  width: 900px;
}
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}

워우워우… 갑자기 처음보는 표현들이 좀 나왔죠? 당황하지 마세요, 설명해드리겠습니다.

#{ } 표현은 특정 문자열을 따로 처리하지않고 그대로 출력 할 때 사용됩니다.

@content directive 를 사용하면 나중에 @include 하였을 때, 그 선택자 내부의 내용들이 @conent 부분에 나타나게됩니다.
```



## 8. 함수

- mixin과 비슷하나 mixin은 style mark up을 반환하는 반면 function은 @return directive를 통해 값을 반환함.

```scss
@function calc-percent($target, $container) {
  @return ($target / $container) * 100%;
}

@function cp($target, $container) {
  @return calc-percent($target, $container);
}

.my-module {
  width: calc-percent(650px, 1000px);
}

--------------------------------------------------
.my-module {
  width: 65%;
}
```

