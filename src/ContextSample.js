import React, {createContext, useContext} from 'react';

const ThemeContext = createContext('black');
const ContextSample = () => {
    const theme = useContext(ThemeContext);  //useContext를 사용하면 컴포넌트에서 context를 더 쉽게 사용할 수 있다  
    const style = {
        width : '24px',
        height : '24px',
        background : theme
    };
    return <div style = {style} />;
};

export default ContextSample;