import React, {useState, useMemo, useCallback, useRef} from 'react';


//🧡🧡🧡🧡 useRef는 .current 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref객체를 반환한다 
function TextInputWithFocusButton() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
      // `current` points to the mounted text input element
      console.log("dd")
      inputEl.current.focus();
      console.log(inputEl)
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

  export default TextInputWithFocusButton;