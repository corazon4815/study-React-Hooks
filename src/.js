import { useReducer } from 'react';

//🧡🧡🧡🧡우리가 기존에 Info컴포넌트에서 여러개의 인풋을 관리하기 위하여
//useReducer로 해결해서 작성했던 로직을 useInputs라는 Hook으로 따로 분리해보자
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}