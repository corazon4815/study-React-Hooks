import React, { useRef } from 'react';

//🧡🧡🧡🧡useRef 로컬변수로 사용하기
const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refsample
    </div>
  );
};

export default RefSample;