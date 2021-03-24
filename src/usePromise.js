import { useState, useEffect } from 'react';

//🧡🧡🧡🧡함수형 컴포넌트에서 Promise함수를 더 쉽게 사용 할 수 있는 Hook을 만들어보자

export default function usePromise(promiseCreator, deps) {
                                    //promiseCreator : promise를 생성하는 함수, deps : 언제 프로미스를 새로 만들지에 대한 조건을 위한 deps배열(기본값은 빈배열)
                                                                                                                        //💥💥💥💥빈배열을 전달하면 가장 처음 렌더링 될때만 실행됨
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async() => {
        setLoading(true);
        try {         //promiseCreator() : setTimeout(()=> resolve('Hello hooks!'), 3000)
            const result = await promiseCreator(); //promiseCreator가 이행될때까지 기다림(기다리는 동안 다른 스크립트를 실행하므로 cpu리소스 낭비가 되지 않음)
            setResolved(result);
        } catch(e){
          setError(e);
        }
        setLoading(false);
        };

  //💖💖💖💖useEffect에 파라미터로 전달해주는 함수에서 async을 사용하면❌❌❌ ex) useEffect(async () => {});
  //useEffect에서는 뒷정리 함수를 반환해야 하는데 async를 사용하게 되면 함수가 아닌 프로미스를 반환하기 때문에!
        useEffect(() => {
            process();
        }, deps);

  return [loading, resolved, error];
}