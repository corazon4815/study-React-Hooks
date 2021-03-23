import React, { useState, useEffect, useReducer } from 'react';

const Info = () => {

    const [name, setName] = useState(''); //useState함수는 하나의 상태값만 관리할 수 있기 때문에 만약 컴포넌트에
                                            //관리해야할 상태가 여러개라면 useState를 여러번 사용하면됨 
    const [nickname, setNickname] = useState('');

    //🧡🧡ComponentDidMount + ComponentDidUpdate 
    useEffect(()=>{
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    }); //😊 이렇게 써놓으면 컴포넌트의 렌더링 될때마다 useEffect가 실행됨


    //🧡🧡ComponentDidMount
    useEffect(()=>{
        console.log('마운트 될 때만 실행됩니다.');
    }, []); //😊 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트할 경우에는 실행할 필요가 없는 경우에는 빈배열[]을 넣어줌  


    //🧡🧡ComponentDidUpdate 
    useEffect(()=>{
        console.log(name);
    }, [name]);  //😊 특정값이 변경될때만 호출하게 하고 싶을때. useEffect의 두번째 파라미터로 전달되는 배열안에 검사하고 싶은 값을 넣어주면 됨 
                //여기에는 props로 전달받은 값을 넣어줘도 되고 useState를 통해 관리하고 있는 상태를 넣어줘도됨 


    //🧡🧡ComponentWillUnmount 
    useEffect(()=>{
        console.log('Info가 랜더링됨')
        console.log(name);
        return ()=> {
            console.log('Info에 변화가있음(종료(언마운트)됐거나 업데이트) '); //😊 return에는 컴포넌트가 언마운트되기전, 업데이트되기 직전에 수행할 작업
                                                                            //단, 랜더링될때마다 뒷정리함수가 실행이 되기 때문에 언마운트 될때만 실행하고 싶으면 useEffect 함수의
                                                                            //두번째 파라미터에 []을 넣자
            console.log(name)
        }
    });

    
   
    
    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
          <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
          </div>
          <div>
            <div>
              <b>이름:</b> {name}
            </div>
            <div>
              <b>닉네임: </b>
              {nickname}
            </div>
          </div>
        </div>
      );
    };

export default Info;