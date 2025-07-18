// JS 모듈(Module)
// import - 가져오기
// import { name } from 'module' - 이름 가져오기(Named Import) - 모듈에서 특정 이름을 가진 값을 가져올 때 사용
// import name from 'module' - 기본 가져오기(Default Import) - 모듈에서 기본으로 내보낸 값을 가져올 때 사용
// export - 내보내기
// export default - 기본 내보내기(Named Export) - 한 모듈에서 하나의 값만 내보낼 때 사용
// export { name } - 이름을 지정하여 내보내기(Default Export) - 여러 값을 내보낼 때 사용

// 시험문제!!
// Fragment는 <></>으로 표현할 수 있으며, 여러 요소를 그룹화할 때 사용합니다.
// nanoid는 고유한 ID를 생성해주는 라이브러리입니다.
// 목록은 List 항목은 Item
// forEach는 반복만
// map은 원본 배열 수만큼 return값 반환
// find는 조건에 맞을 때까지 반복하고 찾으면 함수 끝
// filter는 조건에 맞는 배열만 return

// css 선택자 우선순위 - 태그는 1점 클래스는 10점 아이디는 100점 -> 점수에 따라 우선적으로 적용
// css 에서 경계선은 border를 이용 ex) border: 4px solid red;
// 모서리 둥글게는 border-radius
// 배치를 하기위해 설정해줘야 하는 설정 position: absolute ...;
// 정렬을 하기위해 설정해줘야 하는 설정 display: flex ...;
// 수평은 justify-content: center ...;
// 수직은 align-item: center...;
// gap: ;은 display가 없으면 사용할 수 없음 간격을 설정할때

// <a href="https://naver.com">
//   <div></div>
// </a> anchor의 약어
// <div> division 나누기/ <h1> heading 제목/ <p> paragraph 문단/ <i> italic 기울기/ <u> underline 밑줄/ <kbd> keyboard 키보드모양/ <img> image 이미지
// 사용자에게 데이터를 입력받기위해 사용하는 요소이름은 input/ type은 checkbox, password, email등이 있음
// vaiid는 유효함을 뜻함.

// 사용할 수 있는 폰트 크게 4가지
// CSS에서 font-family로 폰트 선택 가능
// serif - 바탕
// sans-serif - 고딕
// monospace - 고정너비서체
// cursive - 필기체

// wwww.google.com .com은 최상위 도메인
// 최상위 도메인은 2글자 이상이어야 함 www.abc.i -> X www.abc.io -> O

// JavaScript 에서 예외처리 try(에러발생가능코드 실행)-catch(에러 처리)-finally(에러 발생유뮤와 관계없이 실행) Statement(구문)
// 속성은 property 줄여서 props 부모컴포넌트가 자식컴포넌트에게 전달하는 데이터를 의미
// 컴포넌트는 UI Chunk고 재사용이 가능하다는 특징이 있음.
// JS 데이터
// 원시형
// String/ Number/ Boolean/ Null/ Undefined
// 참조형
// Object/ Array/ Function
// 원시형(Primitive) vs 참조형(Reference) 구분할 수 있어야 함.

// 랜더링되지 않으면서 여러요소를 감싸는 태그 Fragment<></>
// 동시에 실행하는 라이브러리 concurrently 병렬실행
// SQL 형식이 아닌 나머지 -> noSQL

// CORS(Cross Origin Resource Sharing) 서로다른 주소를 가진 서버끼리 통신할때 허용하도록 하는 개념

// nanoid 고유한 ID값을 자동으로 만들어주는 패키지 -> UUID 더 고도화된 ID를 만들어줌
// Date.now() 1970-1-1(유닉스 시간)이후로부터 현재까지 흐른 시간(m/s)
// Date.now() + Math.random() 유닉스 시간에 랜덤한 숫자를 더해 고유한 숫자를 만들어서 고유한 ID를 만들 수 있음.

// useState/ useEffect

// JS에서 웹(라우팅) 프레임워크 -> express
