//* 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다.

import GoToButton from './GoToButton';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      {/* <GoToButton direction="scrollDown" label="스크롤 다운" />
      <GoToButton direction="scrollUp" label="스크롤 업" /> */}
      <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" />
    </div>
  );
}

export default Controller;
