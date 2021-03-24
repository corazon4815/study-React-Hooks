import React, {useState, useMemo, useCallback, useRef} from 'react';

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');

    const onChagneInput = (e) =>{
        setValue(e.target.value);
    }
    const onSubmitForm = (e)=> {
        e.preventDefault();
        if(parseInt(this.state.v))
    }

    return (
        <React.Fragment>
            <div>{first} 곱하기 {second}</div>
            <form onSubmit={}>
                <input ref={} value={value}></input>
                <button>입력!</button>
            </form>
            <div id = "result">{result}</div>
        </React.Fragment>
    );
}

export default GuGuDan;