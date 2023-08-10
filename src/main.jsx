import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// React 함수 컴포넌트 요건
// - 함수의 이름은 첫글자가 대문자
// - JSX를 반환

// createRoot = create + Root (React DOM Root)
// ReactDOMRoot 객체를 생성하는 함수
createRoot(document.getElementById("root"))
  // ReactDOMRoot 객체는 render() 메서드를 사용해 React 요소를 실제 DOM 요소에 렌더링 한다.
  .render(
    // App 컴포넌트를 렌더링하는 JSX 구문을 추가.
    <StrictMode>
      <App />
    </StrictMode>
  );
