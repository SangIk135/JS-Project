# Git

버전 관리 시작

```bash
cd 내프로젝트
git init
```

최초 버전 생성

```bash
git add . # 스테이지 업로드
git commit -m "커밋메시지" # 커밋(버전) 생성
```

원격 저장소 추가

```bash
# git remote add 원격저장소별칭 원격저장소주소
git remote add origin https://github.com/소유자/저장소이름/.git
```

원격 저장소 업로드(Push)

```bash
# git push 별칭 브랜치이름
git push origin main
```

원격 저장소 복제(Clone)

```bash
# git clone 원격저장소주소
git clone https://github.com/소유자/저장소이름/.git
```

원격 저장소 다운로드(Pull)

```bash
# git pull 병칭 브랜치이름
git pull origin main
```

# React

## 문법

### 양방향 데이터 바인딩

```jsx
import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('Hello~')

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          setText(event.target.value)
        }}
      />
      <button
        onClick={function () {
          console.log(text)
        }}>
        로그인
      </button>
      <h1>{text}</h1>
    </>
  )
}
```
