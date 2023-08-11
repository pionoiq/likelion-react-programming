//* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다.

import GoToButton from './GoToButton';
import { getNode } from './../../../utils/getNode';

function Controller() {
  // 순수 함수(pure function) 영역
  // React 렌더링 과정에서 불필요한 코드가 들어오면 안 됨.
  return (
    <div role="group" className="buttonGroup">
      {/* onPoniterEnter => 펜, 터치, 마우스(onMouseEnter,onMouseLeave) 등의 입력장치 감지 이벤트 */}
      <GoToButton
        onClick={(el) => {
          // 사이드 이펙트(side effect) 영역
          // React 렌더링 과정과 상관 없이 모든 코드 작성 가능
          const practice = getNode('.Practice');
          // const maxScroll = practice.scrollHeight - practice.clientHeight;

          practice.scroll({
            top: 900,
            behavior: 'smooth',
          });
        }}
        // onPointerEnter={() => {
        //   console.log('onPointerEnter');
        // }}
        // onMouseEnter={() => {
        //   console.log('onMouseEnter');
        // }}
        // onMouseLeave={() => {
        //   console.log('onMouseLeave');
        // }}
        // onKeyDown={() => {
        //   console.log('onKeyDown');
        // }}
        // onKeyUp={() => {
        //   console.log('onKeyUp');
        // }}
        direction="scrollDown"
        label="스크롤 다운"
      />
      <GoToButton
        onClick={(el) => {
          const practice = getNode('.Practice');

          practice.scroll({
            top: 0,
            behavior: 'smooth',
          });
        }}
        direction="scrollUp"
        label="스크롤 업"
      />
      {/* <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" /> */}
    </div>
  );
}

export default Controller;
