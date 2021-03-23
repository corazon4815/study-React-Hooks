import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type){
    case 'INCREMENT' :
      return {value: state.value + 1};
    case 'DECREMENT' :
      return {value: state.value - 1};
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {

  //const [value, setValue] = useState(0); //useState Hook
  
  //배열 비구조화 할당문법
  //이 함수의 파라미터에는 상태의 기본값을 넣어준다
  //이 함수가 호출되면 배열을 반환하고 그 배열의 첫번째 원소는 상태값
  //두번째 원소는 상태를 설정하는 함수이다
  //이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링됨

  const [state, dispatch] = useReducer(reducer, { value: 0});
  //useReducer의 첫번째 파라미터는 리듀서함수, 두번째 파라미터는 해당 리듀서의 기본값
  //이 Hook을 쓰면 state값과 dispatch 함수를 받아옴
  //state는 현재 가르키고 있는 상태
  //dispatch는 액셜을 발생시키는 함수
  //dispatch(action)와 같은 형태로 함수 안에 파라미터로 액션값을 넣어주면 리듀서 함수가 호출됨
  //useReducer의 장점은 업데이트 로직을 컴포넌트 바깥으로 빼낼수 있다는 점
  
  
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
    </div>
  );
};

export default Counter;