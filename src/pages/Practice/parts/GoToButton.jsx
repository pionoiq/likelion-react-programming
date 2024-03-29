function GoToButton({ direction, label, ...restProps /* 나머지 속성 전개 */ }) {
  // let className = '';
  // if (direction === 'down') {
  //   className = 'scrollDown';
  // } else {
  //   className = 'scrollUp';
  // }
  // button -> className={className}
  return (
    <button
      type="button"
      // className={direction==='down'?'scrollDown':'scrollUp'}
      className={direction}
      aria-label={label}
      title={label}
      {...restProps}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

export default GoToButton;
