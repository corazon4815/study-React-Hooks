import React, {useState} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b); //숫자배열을 하나씩 꺼내서 더해줌
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]); //[1,2,3,4,5] 
    const [number, setNumber] = useState('숫자만 입력해주세요');

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number)); //parseInt : 소수점을 없애줌 //concat : 파라미터로 받은 값을 기존의 배열과 합쳐서 새로운 배열을 만들어서 리턴함
        console.log("여기"+nextList);
        setList(nextList);
        setNumber('숫자만 입력해주세요');
    };

    return (
        <div>
            <input value={number} onChange = {onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 :</b>{getAverage(list)}
            </div>
        </div>
    );
};

export default Average;