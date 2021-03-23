import React, {useState, useMemo, useCallback, useRef} from 'react';

//🧡🧡🧡useMemo, useCallback 모두 렌더링 최적화를 위해 사용함
//💛💛💛💛💛💛💛 useMemo : 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행. 만약 원하는 값이 바뀐것이 아니면 이전에 연산했던 결과를 다시 사용
//💛💛💛💛💛💛💛 useCallback : 첫번째 파라미터는 생성해주고 싶은 함수, 두번째 파라미터에는 배열(이 배열에는 어떤값이 바뀌었을 때 함수를 새로 생성해주어야하는지 명시해야함 )
//예를 들어 onChange처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 단 한번만 함수가 생성
//onInsert처럼 배열안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 생성 될때마다 함수가 생성됨
//함수 내부에서 기존의 상태 값을 의존해야할 때는 꼭 두번째 파라미터안에 포함시켜줘야함 onChange의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기때문에
//배열이 비어있어도 상관이 없지만 onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열안에 number와 list를 꼭 넣어줘야함

//useMemo VS useCallback
//useMemo에서 함수를 return하는 경우 더 편하게 쓸 수 있음(숫자, 문자열, 객체처럼 일반값을 재사용하기 위해선 useMemo)


const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b); //숫자배열을 하나씩 꺼내서 더해줌
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]); //[1,2,3,4,5] 
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); //😉useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체안의 current값이 실제 엘리먼트를 가르키게됨

    //useCallback
    const onChange = useCallback(e=>{
        setNumber(e.target.value);
    }, []); //컴포넌트가 처음 렌더링 될 때만 함수 생성

    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    //useCallback
    //useRef
    const onInsert = useCallback(
        e=> {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus(); //focus를 여기에 맞춰줌  💚💚💚{current: input}
            
        },[number,list] //number혹은 list가 바뀌었을 때만 함수 생성 
    );
    
    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number)); //parseInt : 소수점을 없애줌 //concat : 파라미터로 받은 값을 기존의 배열과 합쳐서 새로운 배열을 만들어서 리턴함
    //     console.log("여기"+nextList);
    //     setList(nextList);
    //     setNumber('');
    // };

    const avg = useMemo(() => getAverage(list),[list])

    return (
        <div>
            <input value={number} onChange = {onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 :</b>{avg}
            </div>
        </div>
    );
};

export default Average;